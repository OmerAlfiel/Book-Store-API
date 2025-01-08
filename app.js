const express = require('express');
const app = express();

// Import routes
const bookRoutes = require('./bookstore/routes/bookRoutes');
const userRoutes = require('./bookstore/routes/userRoutes');

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/books', bookRoutes);
app.use('/users', userRoutes);

module.exports = app;