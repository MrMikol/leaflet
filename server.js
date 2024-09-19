const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log('Connect to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

//Pin schema and model
const pinSchema = new mongoose.Schema({
    name: String,
    description: String,
    lat: Number,
    lng: Number,
});