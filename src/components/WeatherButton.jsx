import React from "react";
import { Button } from "react-bootstrap";
const WeatherButton = ({ cities, getCity }) => {
  return (
    <div className="cityChose">
      <Button
        variant="warning"
        className="cityButton"
        onClick={() => getCity("")}
      >
        current
      </Button>
      {cities.map((city, idx) => (
        <Button
          variant="warning"
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
