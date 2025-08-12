import { useState, useEffect } from 'react'; // Removed 'React' import
import Navbar from './components/Navbar';
import LiveUpcoming from './components/LiveUpcoming';
import PointsTable from './components/PointsTable';
import Schedule from './components/Schedule';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchLiveUpcomingMatches, fetchPointsTable, fetchSchedule } from './services/api';
import type { Match, PointsTableEntry, ScheduleMatch } from './types/iplTypes'; // Changed to import type

type View = 'live' | 'points' | 'schedule';

function App() {
  const [activeView, setActiveView] = useState<View>('live');
  const [liveUpcomingData, setLiveUpcomingData] = useState<Match[]>([]);
  const [pointsTableData, setPointsTableData] = useState<PointsTableEntry[]>([]);
  const [scheduleData, setScheduleData] = useState<ScheduleMatch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (isInitialOrInterval: boolean = false) => {
    let shouldShowSpinner = false;
    if ( (activeView === 'live' && liveUpcomingData.length === 0) ||
         (activeView === 'points' && pointsTableData.length === 0) ||
         (activeView === 'schedule' && scheduleData.length === 0) ) {
      shouldShowSpinner = true;
    }

    if ((isInitialOrInterval && shouldShowSpinner) || (shouldShowSpinner && !isInitialOrInterval)) {
      setLoading(true);
    }
    setError(null);

    try {
      const [live, points, sched] = await Promise.all([
        fetchLiveUpcomingMatches(),
        fetchPointsTable(),
        fetchSchedule()
      ]);
      setLiveUpcomingData(live);
      setPointsTableData(points);
      setScheduleData(sched);
    } catch (err) {
      console.error("Failed to fetch data:", err);
      setError('Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(true);

    const intervalId = setInterval(() => {
      console.log('Refreshing data (interval)...');
      fetchData(true);
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let needsSpecificFetch = false;
    if (activeView === 'live' && liveUpcomingData.length === 0) needsSpecificFetch = true;
    if (activeView === 'points' && pointsTableData.length === 0) needsSpecificFetch = true;
    if (activeView === 'schedule' && scheduleData.length === 0) needsSpecificFetch = true;

    if (needsSpecificFetch && !loading && !error) {
      console.log(`Fetching data for view: ${activeView}`);
      fetchData();
    }
  }, [activeView, liveUpcomingData, pointsTableData, scheduleData, loading, error]);


  const renderContent = () => {
    if (loading && liveUpcomingData.length === 0 && pointsTableData.length === 0 && scheduleData.length === 0) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <p className="text-center text-red-500 p-4">{error}</p>;
    }

    switch (activeView) {
      case 'live':
        return (liveUpcomingData.length > 0 || !loading) ? <LiveUpcoming matches={liveUpcomingData} /> : <LoadingSpinner/>;
      case 'points':
        return (pointsTableData.length > 0 || !loading) ? <PointsTable table={pointsTableData} /> : <LoadingSpinner/>;
      case 'schedule':
        return (scheduleData.length > 0 || !loading) ? <Schedule schedule={scheduleData} /> : <LoadingSpinner/>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar activeView={activeView} setActiveView={setActiveView} />
      <main className="container mx-auto max-w-4xl py-4">
        {renderContent()}
      </main>
      <footer className="text-center p-4 text-sm text-gray-500">
        Data sourced from dummy API (simulating iplt20.com). Scraping real-time data is complex.
        This is a demo application.
      </footer>
    </div>
  );
}

export default App;