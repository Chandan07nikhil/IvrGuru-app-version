import express from 'express';
import playstore from 'google-play-scraper';

const app = express();

app.get('/app-version', async (req, res) => {
    try {
        const appDetails = await playstore.app({ appId: 'chandan03.ivrguru' }); 
        res.json({ version: appDetails.version });
    } catch (error) {
        res.status(500).send('Error fetching app version');
    }
});

export default app;
