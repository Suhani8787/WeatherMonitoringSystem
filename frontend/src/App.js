

// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from './services/weatherService';
import './App.css';


const countriesAndCities = {
   India: ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'],
   USA: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin'],
   Canada: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Quebec City', 'Winnipeg', 'Hamilton', 'Kitchener'],
   UK: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Bristol', 'Sheffield', 'Leeds', 'Edinburgh', 'Cardiff'],
   Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Hobart', 'Newcastle', 'Central Coast'],
   Germany: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Nuremberg'],
   France: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille'],
   Japan: ['Tokyo', 'Osaka', 'Yokohama', 'Nagoya', 'Sapporo', 'Kobe', 'Fukuoka', 'Kawasaki', 'Saitama', 'Hiroshima'],
   Brazil: ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Brasília', 'Curitiba', 'Manaus', 'Recife', 'Porto Alegre'],
   'South Africa': ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein', 'East London', 'Kimberley', 'Pietermaritzburg', 'Tshwane'],
};


function App() {
   const [selectedCountry, setSelectedCountry] = useState('');
   const [selectedCity, setSelectedCity] = useState('');
   const [weatherData, setWeatherData] = useState(null);
   const [error, setError] = useState('');


   const handleCountryChange = (e) => {
       setSelectedCountry(e.target.value);
       setSelectedCity(''); // Reset city selection when country changes
   };


   const handleCityChange = (e) => {
       setSelectedCity(e.target.value);
   };


   const handleGetWeather = async () => {
       if (!selectedCity) {
           setError('Please select a city.');
           return;
       }
       setError(''); // Clear any previous error
       try {
           const data = await fetchWeatherData(selectedCity);
           setWeatherData(data);
       } catch (err) {
           setError('Error fetching weather data. Please try again.');
       }
   };


   return (
       <div className="App">
           <h1>Weather Monitoring System</h1>
           <div>
               <label>Select Country:</label>
               <select value={selectedCountry} onChange={handleCountryChange}>
                   <option value="">--Select Country--</option>
                   {Object.keys(countriesAndCities).map((country) => (
                       <option key={country} value={country}>
                           {country}
                       </option>
                   ))}
               </select>
           </div>
           <div>
               <label>Select City:</label>
               <select value={selectedCity} onChange={handleCityChange} disabled={!selectedCountry}>
                   <option value="">--Select City--</option>
                   {selectedCountry &&
                       countriesAndCities[selectedCountry].map((city) => (
                           <option key={city} value={city}>
                               {city}
                           </option>
                       ))}
               </select>
           </div>
           <button onClick={handleGetWeather}>Get Weather</button>


           {error && <p className="error">{error}</p>}


           {weatherData && (
               <div>
                   <h2>Weather in {selectedCity}, {selectedCountry}</h2>
                   <p>Main Condition: {weatherData.weather[0].main}</p>
                   <p>Current Temperature: {weatherData.main.temp} °C</p>
                   <p>Feels Like: {weatherData.main.feels_like} °C</p>
                  
               </div>
           )}
       </div>
   );
}


export default App;




