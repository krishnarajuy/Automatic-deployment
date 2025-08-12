import React from 'react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: 'live' | 'points' | 'schedule') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView }) => {
  const commonButtonClass = "py-2 px-3 sm:px-4 text-sm sm:text-base rounded-md transition-colors duration-200";
  const activeButtonClass = "bg-ipl-blue text-white";
  const inactiveButtonClass = "bg-white text-ipl-blue hover:bg-ipl-blue hover:text-white";

  return (
    <nav className="bg-white shadow-md p-2 sm:p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-ipl-blue mb-2 sm:mb-0">IPL T20 Dashboard</h1>
        <div className="flex space-x-1 sm:space-x-2">
          <button
            onClick={() => setActiveView('live')}
            className={`${commonButtonClass} ${activeView === 'live' ? activeButtonClass : inactiveButtonClass}`}
          >
            Live/Upcoming
          </button>
          <button
            onClick={() => setActiveView('points')}
            className={`${commonButtonClass} ${activeView === 'points' ? activeButtonClass : inactiveButtonClass}`}
          >
            Points Table
          </button>
          <button
            onClick={() => setActiveView('schedule')}
            className={`${commonButtonClass} ${activeView === 'schedule' ? activeButtonClass : inactiveButtonClass}`}
          >
            Schedule
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;