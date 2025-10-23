import React from "react";
import { Button } from "react-bootstrap";
const WeatherButton = () => {
  return (
    <div className="cityChose">
      <Button variant="warning" className="cityButton">
        current
      </Button>
      <Button variant="warning" className="cityButton">
        hanoi
      </Button>
      <Button variant="warning" className="cityButton">
        paris
      </Button>
      <Button variant="warning" className="cityButton">
        new york
      </Button>
      <Button variant="warning" className="cityButton">
        seoul
      </Button>
    </div>
  );
};

export default WeatherButton;
