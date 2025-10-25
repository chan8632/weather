const WeatherButton = ({ cities, getCity, selectedCity, bgClass }) => {
  return (
    <div className={`cityChose ${bgClass}`}>
      <button
        className={`city-button ${
          selectedCity === "current" ? "selected" : ""
        }`}
        onClick={() => getCity("current")}
      >
        current
      </button>
      {cities.map((city, idx) => (
        <button
          onClick={() => getCity(city)}
          className={`city-button ${selectedCity === city ? "selected" : ""}`}
          key={idx}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;
