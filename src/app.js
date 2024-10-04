const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/categoryRoutes');
const adRoutes=require('./routes/AdRoute')
// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json({ limit: '20mb' })); // Increase limit for JSON payload
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true })); // Increase limit for URL-encoded payloads

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/ads', adRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

const PORT = process.env.PORT || 8282;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
