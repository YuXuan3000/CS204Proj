const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/send-message', (req, res) => {
    const { message } = req.body;
    //Send the message to Roblox using RemoteEvents
    console.log(`Received message: ${message}`);
    //Add code here to send the message to Roblox using HTTP Service
    res.send('Message received');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});