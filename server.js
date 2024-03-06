const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
dotenv.config();

// Connect to MongoDB
mongoose.connect('mongodb+srv://chinthalavikas:9390484687@cluster46.olq77wb.mongodb.net/Datacollector?retryWrites=true&w=majority&appName=Cluster46'
)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// MongoDB Schema --mongoose models
const DataCollectorSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
});

const DataCollector = mongoose.model('user', DataCollectorSchema); // Changed collection name to 'User'

app.get('/api/data', async (req, res) => {
  try {
    const data = await DataCollector.find();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
