import React from "react";

const WeatherBox = ({ weatherData }) => {
  
    console.log(weatherData);
  
  return (
    <div className="weatherDashboard">
      <div className="cityName">{weatherData?.name}</div>
      <div className="candf">
        {weatherData?.main.temp.toFixed(2)}C /
        {((weatherData?.main.temp * 9) / 5 + 32).toFixed(2)}F
      </div>
      <div className="description">{weatherData?.weather[0].description}</div>
    </div>
  );
};

export default WeatherBox;