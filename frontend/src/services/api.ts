import axios from 'axios';
import type { Match, PointsTableEntry, ScheduleMatch } from '../types/iplTypes'; // Changed to import type

const API_BASE_URL = '/api/ipl'; 

export const fetchLiveUpcomingMatches = async (): Promise<Match[]> => {
    const response = await axios.get<Match[]>(`${API_BASE_URL}/live-upcoming`);
    return response.data;
};

export const fetchPointsTable = async (): Promise<PointsTableEntry[]> => {
    const response = await axios.get<PointsTableEntry[]>(`${API_BASE_URL}/points-table`);
    return response.data;
};

export const fetchSchedule = async (): Promise<ScheduleMatch[]> => {
    const response = await axios.get<ScheduleMatch[]>(`${API_BASE_URL}/schedule`);
    return response.data;
};