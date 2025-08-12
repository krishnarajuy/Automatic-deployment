import { Router } from 'express';
import { getLiveUpcoming, getPoints, getSched } from '../controllers/iplController';

const router = Router();

router.get('/live-upcoming', getLiveUpcoming);
router.get('/points-table', getPoints);
router.get('/schedule', getSched);

export default router;