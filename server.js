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

const Pin = mongoose.model('Pin', pinSchema);

//API endpoint to save a pin
app.post('/api/pins', async (req, res) => {
    try {
        const { name, description, lat, lng } = req.body;
        const newPin = new Pin({ name, description, lat, lng });
        await newPin.save();
        res.status(201).json({ message: 'Pin saved successfully', pin: newPin });
    } catch (error) {
        res.status(500).json({ message: 'Failed to save pin', error });
    }
});

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});