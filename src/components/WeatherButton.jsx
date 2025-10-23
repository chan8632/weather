import React from "react";
import { Button } from "react-bootstrap";
const WeatherButton = ({ cities }) => {
  return (
    <div className="cityChose">
      <Button variant="warning" className="cityButton">
        current
      </Button>
      {cities.map((city) => (
        <Button variant="warning" className="cityButton">
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
