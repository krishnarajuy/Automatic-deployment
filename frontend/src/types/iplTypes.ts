// For simplicity, you can copy the content from backend/src/types/iplTypes.ts here
// Or, if setting up a monorepo, you could share this file.

export interface MatchTeam {
  name: string;
  shortName: string;
  logo?: string;
  score?: string;
  overs?: string;
}

export interface Match {
  id: string;
  matchNumber: string;
  status: 'LIVE' | 'UPCOMING' | 'COMPLETED';
  venue: string;
  dateTime: string;
  team1: MatchTeam;
  team2: MatchTeam;
  toss?: string;
  result?: string;
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
  date: string;
  time: string;
  team1: MatchTeam;
  team2: MatchTeam;
  venue: string;
}