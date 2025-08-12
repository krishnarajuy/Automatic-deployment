import axios from 'axios';
import * as cheerio from 'cheerio';
import { Match, PointsTableEntry, ScheduleMatch } from '../types/iplTypes';

// --- DUMMY DATA ---
// (Importing JSON files directly)
import dummyUpcomingMatches from '../../MOCK_DATA/upcomingMatches.json';
import dummyLiveMatch from '../../MOCK_DATA/liveMatch.json';
import dummyPointsTable from '../../MOCK_DATA/pointsTable.json';
import dummySchedule from '../../MOCK_DATA/schedule.json';


// In-memory cache (simple implementation)
interface Cache<T> {
    data: T | null;
    lastFetched: number | null;
}

const cacheTTL = 5 * 60 * 1000; // 5 minutes

const liveUpcomingCache: Cache<Match[]> = { data: null, lastFetched: null };
const pointsTableCache: Cache<PointsTableEntry[]> = { data: null, lastFetched: null };
const scheduleCache: Cache<ScheduleMatch[]> = { data: null, lastFetched: null };


// --- SCRAPING LOGIC (HIGHLY UNRELIABLE - FOR ILLUSTRATION) ---
// THESE SELECTORS WILL LIKELY BE OUTDATED AND NEED CONSTANT UPDATES
// iplt20.com is a dynamic site, making scraping very difficult.
// Consider using official APIs if available, or accept that scraping will be brittle.

const IPL_BASE_URL = 'https://www.iplt20.com';

export const getLiveOrUpcomingMatches = async (forceScrape = false): Promise<Match[]> => {
    console.log('Fetching live/upcoming matches...');
    if (!forceScrape && liveUpcomingCache.data && liveUpcomingCache.lastFetched && (Date.now() - liveUpcomingCache.lastFetched < cacheTTL)) {
        console.log('Returning cached live/upcoming matches.');
        return liveUpcomingCache.data;
    }

    try {
        // --- ATTEMPT TO SCRAPE ---
        // This is a placeholder. Real scraping is much more complex for dynamic sites.
        // const response = await axios.get(`${IPL_BASE_URL}/matches/schedule/men`);
        // const $ = cheerio.load(response.data);
        // ... complex cheerio logic here ...
        // For now, we'll simulate a mix of live and upcoming from dummy data

        // Simulate a live match sometimes
        const isLiveMatchAvailable = Math.random() > 0.5; // 50% chance of a "live" match
        let matches: Match[] = [];

        if (isLiveMatchAvailable) {
            matches.push(dummyLiveMatch as Match); // Cast because it's a single object
        }
        matches.push(...dummyUpcomingMatches as Match[]);


        liveUpcomingCache.data = matches;
        liveUpcomingCache.lastFetched = Date.now();
        console.log('Fetched and cached live/upcoming matches.');
        return matches;

    } catch (error) {
        console.error('Error scraping live/upcoming matches:', error);
        console.log('Falling back to dummy live/upcoming data.');
        // Fallback to dummy data on error
        const matches: Match[] = [];
        if (Math.random() > 0.5) matches.push(dummyLiveMatch as Match);
        matches.push(...dummyUpcomingMatches as Match[]);
        return matches;
    }
};

export const getPointsTable = async (forceScrape = false): Promise<PointsTableEntry[]> => {
    console.log('Fetching points table...');
    if (!forceScrape && pointsTableCache.data && pointsTableCache.lastFetched && (Date.now() - pointsTableCache.lastFetched < cacheTTL)) {
        console.log('Returning cached points table.');
        return pointsTableCache.data;
    }

    try {
        // --- ATTEMPT TO SCRAPE ---
        // const response = await axios.get(`${IPL_BASE_URL}/points-table/men/2024`); // URL changes per year
        // const $ = cheerio.load(response.data);
        // ... complex cheerio logic here ...

        pointsTableCache.data = dummyPointsTable as PointsTableEntry[];
        pointsTableCache.lastFetched = Date.now();
        console.log('Fetched and cached points table.');
        return dummyPointsTable as PointsTableEntry[];

    } catch (error) {
        console.error('Error scraping points table:', error);
        console.log('Falling back to dummy points table data.');
        return dummyPointsTable as PointsTableEntry[];
    }
};

export const getSchedule = async (forceScrape = false): Promise<ScheduleMatch[]> => {
    console.log('Fetching schedule...');
     if (!forceScrape && scheduleCache.data && scheduleCache.lastFetched && (Date.now() - scheduleCache.lastFetched < cacheTTL)) {
        console.log('Returning cached schedule.');
        return scheduleCache.data;
    }
    try {
        // --- ATTEMPT TO SCRAPE ---
        // const response = await axios.get(`${IPL_BASE_URL}/matches/schedule/men`);
        // const $ = cheerio.load(response.data);
        // ... complex cheerio logic here ...

        scheduleCache.data = dummySchedule as ScheduleMatch[];
        scheduleCache.lastFetched = Date.now();
        console.log('Fetched and cached schedule.');
        return dummySchedule as ScheduleMatch[];
    } catch (error) {
        console.error('Error scraping schedule:', error);
        console.log('Falling back to dummy schedule data.');
        return dummySchedule as ScheduleMatch[];
    }
};

// --- SCRAPING METHODOLOGY & CHALLENGES DOCUMENTATION ---
/*
Scraping Methodology (Conceptual - actual implementation for iplt20.com is hard):
1. Identify Target URLs:
   - Matches: https://www.iplt20.com/matches/schedule/men
   - Points Table: https://www.iplt20.com/points-table/men/YEAR
2. Fetch HTML: Use `axios.get(url)` to retrieve the page content.
3. Parse HTML: Use `cheerio.load(htmlContent)` to create a traversable DOM-like structure.
4. Select Elements: Use CSS selectors (e.g., `$('.match-card')`, `$('table#pointsTable tbody tr')`)
   to find the relevant HTML elements containing the data. This requires inspecting the website's
   HTML structure using browser developer tools.
5. Extract Data: Iterate over selected elements and extract text (`.text()`), attributes (`.attr('href')`),
   and structure the data into the defined TypeScript types.
6. Handle Pagination/Dynamic Content: iplt20.com loads content dynamically (JavaScript).
   Simple GET requests with axios might not get all data. Tools like Puppeteer or Playwright
   (headless browsers) would be needed for reliable scraping of such sites, but they are heavier.

Challenges Encountered (General & Specific to iplt20.com):
1. Dynamic Content Loading: Much of the data on iplt20.com is loaded via JavaScript after the initial
   HTML page loads. `axios` + `cheerio` only get the initial HTML, often missing the actual data.
   This is the BIGGEST challenge.
2. Changing HTML Structure: Websites frequently update their layout and class names. Any scraper
   relying on specific selectors will break when these changes occur. This requires constant maintenance.
3. Anti-Scraping Measures: Sites may employ techniques like CAPTCHAs, IP blocking, or request rate
   limiting to prevent scraping.
4. Complex Data Structures: Extracting and correctly structuring data from deeply nested or
   inconsistently structured HTML can be tedious and error-prone.
5. Selector Specificity: Finding robust and unique CSS selectors can be difficult.
6. API Unavailability: Official APIs are the best way, but not always publicly available.
   iplt20.com does have internal APIs the site uses, which could potentially be reverse-engineered,
   but this is more advanced and can also change without notice.

For this project, due to these challenges, we are heavily relying on DUMMY DATA.
The "scraping" functions are more like placeholders that return this dummy data.
A robust scraper for iplt20.com would be a significant project in itself.
*/