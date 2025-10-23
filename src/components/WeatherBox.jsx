import React from "react";

const WeatherBox = ({ weatherData }) => {
  return (
    <div className="weatherDashboard">
      <div className="timezone">{weatherData.timezone}</div>
      <div className="candf">
        {weatherData.current.temp.toFixed(2)}C /{" "}
        {((weatherData.current.temp * 9) / 5 + 32).toFixed(2)}F
      </div>
      <div className="description">
        {weatherData.current.weather[0].description}
      </div>
    </div>
  );
};

export default WeatherBox;