# Weather Monitoring System

## Introduction
The Weather Monitoring System allows users to select a city and view real-time weather data, including temperature and conditions. This application leverages OpenWeather API to fetch weather information and presents it through a user-friendly interface built with React.

## Project Structure
```
WeatherMonitoringSystem/
├── backend/
│   ├── .env                        # Environment variables
│   ├── index.js                    # Entry point for the backend server
│   ├── package.json                # Backend dependencies and scripts
│   ├── package-lock.json           # Exact versions of backend dependencies
│   ├── routes/                     # Directory for route handlers
│   │   └── weatherRoutes.js        # API routes for weather data
│   └── models/                     # Directory for database models
│       └── Weather.js              # Mongoose model for weather data
│
└── frontend/
    ├── public/
    │   ├── index.html              # Main HTML file
    │   └── favicon.ico             # Favicon for the application
    │
    ├── src/
    │   ├── components/             # Directory for React components
    │   │   └── WeatherDisplay.js   # Component to display weather data
    │   ├── services/               # Directory for API services
    │   │   └── weatherService.js   # Service to fetch weather data
    │   ├── App.js                  # Main App component
    │   ├── index.js                # Entry point for the React application
    │   ├── App.css                 # CSS styles for the App
    │   └── index.css               # Global CSS styles
    │
    ├── package.json                # Frontend dependencies and scripts
    └── package-lock.json           # Exact versions of frontend dependencies
```

## Setup Instructions

### Backend Setup
1. **Create the Backend Directory**:
   ```bash
   mkdir backend
   cd backend
   ```

2. **Initialize a New Node.js Project**:
   ```bash
   npm init -y
   ```

3. **Install Required Dependencies**:
   ```bash
   npm install express axios mongoose dotenv cors
   ```

### Frontend Setup
1. **Create the Frontend Directory**:
   ```bash
   cd ..
   mkdir frontend
   cd frontend
   ```

2. **Create a New React Application**:
   ```bash
   npx create-react-app .
   ```

3. **Install Required Dependencies**:
   ```bash
   npm install axios react-chartjs-2 chart.js ajv react-scripts@latest
   ```

### Environment Variables
1. **Create a `.env` file in the Backend Directory**:
   - Add your MongoDB URL and OpenWeather API key:
     ```
     MONGODB_URI=your_mongodb_atlas_connection_string
     OPENWEATHER_API_KEY=your_open_weather_api_key
     ```

## Running the Application
1. **Start the Backend Server**:
   ```bash
   cd backend
   node index.js
   ```

2. **Start the Frontend Application**:
   ```bash
   cd frontend
   npm start
   ```

## Conclusion
You now have a fully functional Weather Monitoring System that allows users to check the weather conditions in their selected city. Enjoy using your new application!

---
