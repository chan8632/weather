import React from "react";
import { Button } from "react-bootstrap";
const WeatherButton = ({ cities, getCity, selectedCity }) => {
  return (
    <div className="cityChose">
      <Button
        variant={selectedCity === "" ? "outline-warning" : "warning"}
        className="cityButton"
        onClick={() => getCity("current")}
      >
        current
      </Button>
      {cities.map((city, idx) => (
        <Button
          variant={selectedCity === city ? "outline-warning" : "warning"}
          onClick={() => getCity(city)}
          className="cityButton"
          key={idx}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
