import { Request, Response } from 'express';
import * as scraperService from '../services/scraperService';

export const getLiveUpcoming = async (req: Request, res: Response) => {
    try {
        const forceScrape = req.query.force === 'true';
        const data = await scraperService.getLiveOrUpcomingMatches(forceScrape);
        res.json(data);
    } catch (error) {
        console.error('Error in getLiveUpcoming controller:', error);
        res.status(500).json({ message: 'Error fetching live/upcoming matches' });
    }
};

export const getPoints = async (req: Request, res: Response) => {
    try {
        const forceScrape = req.query.force === 'true';
        const data = await scraperService.getPointsTable(forceScrape);
        res.json(data);
    } catch (error) {
        console.error('Error in getPoints controller:', error);
        res.status(500).json({ message: 'Error fetching points table' });
    }
};

export const getSched = async (req: Request, res: Response) => {
    try {
        const forceScrape = req.query.force === 'true';
        const data = await scraperService.getSchedule(forceScrape);
        res.json(data);
    } catch (error) {
        console.error('Error in getSched controller:', error);
        res.status(500).json({ message: 'Error fetching schedule' });
    }
};