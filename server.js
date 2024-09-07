import express from 'express';
import playstore from 'google-play-scraper';

const app = express();
const PORT = 3000;

app.get('/app-version', async (req, res) => {
    try {
        const appDetails = await playstore.app({ appId: 'chandan03.ivrguru' }); 
        res.json({ version: appDetails.version });
    } catch (error) {
        res.status(500).send('Error fetching app version');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
