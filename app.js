const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todo');

const app = express();

// Connect to MongoDB
let dbUrl = 'mongodb+srv://todos:todos@assignments-cluster.uesk9xg.mongodb.net/?retryWrites=true&w=majority&appName=assignments-cluster'
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/todos', todoRoutes);

module.exports = app;
