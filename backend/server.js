require('dotenv').config(); // Load dotenv at the top

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes'); // Ensure correct path
const bcrypt = require('bcryptjs');
const app = express();
const port = 4011;
const connection = process.env.URI;

// Debugging environment variables
console.log("MongoDB URI:", process.env.URI ? "✅ Loaded" : "❌ Missing");

// Check if MongoDB URI exists
if (!connection) {
  console.error("❌ MongoDB connection URI is missing. Set it in your .env file.");
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json()); // Ensure JSON parsing is enabled

let connectionStatus = '🔴 Disconnected';

// Database connection
const startDatabase = async () => { 
    try {
        await mongoose.connect(connection); // No need for deprecated options
        connectionStatus = "✅ Connected to database.";
        console.log(connectionStatus);
    } catch (err) {
        console.error("❌ Database connection failed:", err.message);
        connectionStatus = "❌ Database connection failed.";
    }
};

const stopDatabase = async () => {
    await mongoose.disconnect();
    connectionStatus = "🔴 Database disconnected";
};

// Routes
app.get('/', (req, res) => {
  res.send(connectionStatus);
});

app.get('/ping', (req, res) => {
  res.send("Hello Raj");
});

app.use('/', routes);

// Start server only if run directly
if (require.main === module) {
  (async () => {
    await startDatabase();
    app.listen(port, () => {
      console.log(`🚀 Server running on PORT: ${port}`);
    });
  })();
}

module.exports = app;
