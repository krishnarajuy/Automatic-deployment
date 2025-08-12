import express from 'express';
import cors from 'cors';
import iplRoutes from './routes/iplRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // To parse JSON bodies

// API Routes
app.use('/api/ipl', iplRoutes);

app.get('/', (req, res) => {
    res.send('IPL Dashboard API Running!');
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});