import React from 'react';
import type { ScheduleMatch } from '../types/iplTypes';
import './Schedule.css';  // Import the external CSS file

interface ScheduleProps {
  schedule: ScheduleMatch[];
}

const Schedule: React.FC<ScheduleProps> = ({ schedule }) => {
  if (!schedule || schedule.length === 0) {
    return <p className="no-schedule">Schedule is currently unavailable.</p>;
  }

  return (
    <div className="schedule-container">
      <h2 className="schedule-title">Full Match Schedule</h2>
      <div className="schedule-list">
        {schedule.map((match) => (
          <div key={match.id} className="schedule-item">
            <div className="schedule-header">
              <h3 className="match-title">{match.matchNumber}: {match.team1.name} vs {match.team2.name}</h3>
              <span className="match-date">{match.date} - {match.time}</span>
            </div>
            <div className="match-details">
              <div className="teams-info">
                <img src={match.team1.logo || '/teams/default.png'} alt={match.team1.shortName} className="team-logo" />
                <span className="team-shortname">{match.team1.shortName}</span>
                <span className="vs-text">vs</span>
                <span className="team-shortname">{match.team2.shortName}</span>
                <img src={match.team2.logo || '/teams/default.png'} alt={match.team2.shortName} className="team-logo" />
              </div>
              <p className="match-venue">{match.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;