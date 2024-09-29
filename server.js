const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

let latestBotData = null; // Variable to store the latest bot data

// API endpoint to receive bot data
app.post('/api/bot-data', (req, res) => {
    latestBotData = req.body; // Store the received bot data
    console.log('Received Bot Data:', latestBotData);
    res.status(200).json({ message: 'Data received successfully!' });
});

// API endpoint to serve the latest bot data
app.get('/api/bot-data', (req, res) => {
    if (latestBotData) {
        res.status(200).json(latestBotData);
    } else {
        res.status(404).json({ message: 'No bot data available' });
    }
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});
