const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

async function startApp() {
    const message = "Hello, this is a message to the global chat!";
    try {
        const response = await axios.post('http://localhost:3000/send-message', {
            message: message
        });
        console.log("Message sent to web server successfully!");
    } catch (error) {
        console.error("Failed to send message to web server:", error);
    }
}

startApp();