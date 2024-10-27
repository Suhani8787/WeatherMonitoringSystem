const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const axios = require('axios');
const WeatherSummary = require('./models/WeatherSummary');
const cors = require('cors'); // Import CORS package


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());


// Route to get weather data
app.get('/api/weather', async (req, res) => {
   const { city, country } = req.query; // Get city and country from query parameters
   const weatherData = [];
   const processedData = {
       averageTemperature: 0,
       maxTemperature: Number.MIN_VALUE,
       minTemperature: Number.MAX_VALUE,
       dominantCondition: '',
       conditionCounts: {}
   };


   try {
       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`);
       const data = response.data;


       // Push raw data
       weatherData.push(data);


       // Process temperature data
       const temp = data.main.temp;
       processedData.averageTemperature += temp;
       processedData.maxTemperature = Math.max(processedData.maxTemperature, temp);
       processedData.minTemperature = Math.min(processedData.minTemperature, temp);


       // Count dominant weather condition
       const condition = data.weather[0].main;
       processedData.conditionCounts[condition] = (processedData.conditionCounts[condition] || 0) + 1;


       // Calculate average temperature
       processedData.averageTemperature /= 1; // Now it's just one city


       // Determine the dominant weather condition
       processedData.dominantCondition = Object.keys(processedData.conditionCounts).reduce((a, b) => processedData.conditionCounts[a] > processedData.conditionCounts[b] ? a : b);


       // Send response with processed data
       res.json(data); // Return just the data for one city
   } catch (error) {
       console.error('Error retrieving weather data:', error.message);
       res.status(500).send('Error retrieving weather data: ' + error.message);
   }
});


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.error('MongoDB connection error:', err));


// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});






