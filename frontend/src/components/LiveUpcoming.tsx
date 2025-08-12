import React from 'react';
import "./LiveUpcoming.css";
import type { Match } from '../types/iplTypes'; // Changed to import type

interface LiveUpcomingProps {
  matches: Match[];
}

const LiveUpcoming: React.FC<LiveUpcomingProps> = ({ matches }) => {
  const liveMatch = matches.find(m => m.status === 'LIVE');
  const upcomingMatches = matches.filter(m => m.status === 'UPCOMING').slice(0, 3); // Show few upcoming

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="p-2 sm:p-4">
      <h2 className="text-2xl font-bold mb-4 text-ipl-blue">Live / Upcoming Matches</h2>
      {liveMatch && (
        <div className="mb-6 p-4 border-2 border-red-500 rounded-lg shadow-lg bg-white">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-red-600">LIVE: {liveMatch.matchNumber}</h3>
            <span className="text-sm text-gray-600">{liveMatch.venue}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <img src={liveMatch.team1.logo || '/teams/default.png'} alt={liveMatch.team1.name} className="w-12 h-12 mb-1" />
              <span className="font-bold text-lg">{liveMatch.team1.shortName}</span>
              <span className="text-md">{liveMatch.team1.score} {liveMatch.team1.overs}</span>
            </div>
            <div className="text-gray-700 text-2xl font-bold">VS</div>
            <div className="flex flex-col items-center md:items-end">
              <img src={liveMatch.team2.logo || '/teams/default.png'} alt={liveMatch.team2.name} className="w-12 h-12 mb-1" />
              <span className="font-bold text-lg">{liveMatch.team2.shortName}</span>
              <span className="text-md">{liveMatch.team2.score} {liveMatch.team2.overs}</span>
            </div>
          </div>
          {liveMatch.toss && <p className="text-sm text-gray-600 mt-3 text-center">{liveMatch.toss}</p>}
          {liveMatch.currentStriker && (
            <div className="mt-3 pt-3 border-t text-sm text-center">
                <p><strong>Striker:</strong> {liveMatch.currentStriker.name} - {liveMatch.currentStriker.runs} ({liveMatch.currentStriker.balls})</p>
                {liveMatch.currentNonStriker && <p><strong>Non-Striker:</strong> {liveMatch.currentNonStriker.name} - {liveMatch.currentNonStriker.runs} ({liveMatch.currentNonStriker.balls})</p>}
                {liveMatch.currentBowler && <p><strong>Bowler:</strong> {liveMatch.currentBowler.name} - {liveMatch.currentBowler.overs} ov, {liveMatch.currentBowler.runs} R, {liveMatch.currentBowler.wickets} W</p>}
            </div>
          )}
           {liveMatch.result && <p className="text-md font-semibold text-green-600 mt-3 text-center">{liveMatch.result}</p>}
        </div>
      )}

      {!liveMatch && upcomingMatches.length === 0 && <p>No live or upcoming matches information available.</p>}
      
      {upcomingMatches.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">{liveMatch ? 'Next Up:' : 'Upcoming Matches:'}</h3>
          {upcomingMatches.map((match) => (
            <div key={match.id} className="mb-4 p-3 border rounded-lg shadow bg-white">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-lg font-medium">{match.matchNumber}</h4>
                <span className="text-xs text-gray-500">{formatDate(match.dateTime)}</span>
              </div>
              <div className="flex justify-around items-center text-center">
                <div className="flex flex-col items-center">
                  <img src={match.team1.logo || '/teams/default.png'} alt={match.team1.name} className="w-10 h-10 mb-1" />
                  <span className="font-semibold">{match.team1.shortName}</span>
                </div>
                <span className="text-gray-600">vs</span>
                <div className="flex flex-col items-center">
                  <img src={match.team2.logo || '/teams/default.png'} alt={match.team2.name} className="w-10 h-10 mb-1" />
                  <span className="font-semibold">{match.team2.shortName}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">{match.venue}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LiveUpcoming;