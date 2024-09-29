const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint to receive bot data
app.post('/api/bot-data', (req, res) => {
    const botData = req.body;
    console.log('Received Bot Data:', botData);
    res.status(200).json({ message: 'Data received successfully!' });
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});
