// src/services/weatherService.js


const API_URL = "http://localhost:5000/api/weather"; // Adjust based on your API endpoint


export const fetchWeatherData = async (city, country) => {
   try {
       const response = await fetch(`${API_URL}?city=${city}&country=${country}`);
       if (!response.ok) {
           throw new Error("Failed to fetch weather data");
       }
       const data = await response.json();
       return data;
   } catch (error) {
       console.error("Error fetching weather data:", error);
       throw error;
   }
};






