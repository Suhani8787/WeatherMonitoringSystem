const mongoose = require('mongoose');




const weatherSummarySchema = new mongoose.Schema({
   date: {
       type: String, // Format YYYY-MM-DD
       required: true
   },
   averageTemperature: {
       type: Number,
       required: true
   },
   maximumTemperature: {
       type: Number,
       required: true
   },
   minimumTemperature: {
       type: Number,
       required: true
   },
   dominantCondition: {
       type: String,
       required: true
   }
});




module.exports = mongoose.model('WeatherSummary', weatherSummarySchema);


