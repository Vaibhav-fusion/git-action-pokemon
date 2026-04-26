const express = require('express');
const routes = require('./routes');

const app = express();

// CORS (minimal)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Routes
app.use('/', routes);

module.exports = app;