import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("current");
  const cities = ["hanoi", "paris", "new york", "seoul"];
  const getCity = (city) => {
    setCity(city);
  };
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getWeatherByCurrentLocation(latitude, longitude);
      },
      // (error) => {
      //   // 실패 시 (권한 거부, API 오류 등)
      //   console.error("Geolocation 오류:", error);
      //   // 오류가 발생해도 테스트 데이터를 사용하도록 처리
      //   getWeatherByCurrentLocation(null, null); // 또는 다른 기본값 처리
      // }
    );
  };
  const getWeatherByCurrentLocation = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d909c7f791a049ea70613e9382509195&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    // const data = TestData;
    setLoading(false);
    setWeatherData(data);
  };
  const getWeatherByCity = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d909c7f791a049ea70613e9382509195&units=metric`
    );
    const cityData = await response.json();
    setWeatherData(cityData);
  };

  useEffect(() => {
    if (city === "current") {
      getCurrentLocation();
    } else {
      getWeatherByCity(city);
    }
  }, [city]);

  return loading ? (
    "loading"
  ) : (
    <div>
      <div className="container">
        <WeatherBox weatherData={weatherData} />
        <WeatherButton cities={cities} getCity={getCity} selectedCity={city} />
      </div>
    </div>
  );
}

export default App;
