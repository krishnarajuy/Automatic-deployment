export interface MatchTeam {
  name: string;
  shortName: string;
  logo?: string; // URL to team logo
  score?: string; // e.g., "178/6"
  overs?: string; // e.g., "(20.0)"
}

export interface Match {
  id: string;
  matchNumber: string;
  status: 'LIVE' | 'UPCOMING' | 'COMPLETED';
  venue: string;
  dateTime: string; // ISO string or human-readable
  team1: MatchTeam;
  team2: MatchTeam;
  toss?: string; // e.g., "Team A won the toss and chose to bat"
  result?: string; // e.g., "Team A won by 20 runs"
  currentStriker?: { name: string; runs: string; balls: string; };
  currentNonStriker?: { name: string; runs: string; balls: string; };
  currentBowler?: { name: string; overs: string; runs: string; wickets: string; };
}

export interface PointsTableEntry {
  position: number;
  team: MatchTeam;
  matchesPlayed: number;
  wins: number;
  losses: number;
  noResult: number;
  points: number;
  netRunRate: string;
}

export interface ScheduleMatch {
  id: string;
  matchNumber: string;
  date: string; // e.g., "Apr 10"
  time: string; // e.g., "7:30 PM IST"
  team1: MatchTeam;
  team2: MatchTeam;
  venue: string;
}