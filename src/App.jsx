import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import LodaingWindy from "./components/LoadingWindy";
//TODO: 로딩스피너, 날씨 배경화면에 따른 Theme 변화
//FIX ME : 해당 도시를 클릭했을 때 바로 해당 도시의 날짜 배경이 안 뜨고 다른 버튼을 눌러야 그제야 뜬다.
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("current");
  const [bgClass, setBgClass] = useState("bg-default");
  const cities = ["hanoi", "paris", "new york", "seoul"];
  const weatherCondition = {
    "overcast clouds": "bg-cloudy",
    "few clouds": "bg-cloudy",
    "scattered clouds": "bg-cloudy",
    "broken clouds": "bg-cloudy",
    "clear sky": "bg-clear-sky",
    rain: "bg-rain",
  };
  const getCity = (city) => {
    setCity(city);
  };
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getWeatherByCurrentLocation(latitude, longitude);
    });
  };
  const getWeatherByCurrentLocation = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d909c7f791a049ea70613e9382509195&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const description = weatherCondition[data.weather[0].description];
    setBgClass(description || "bg-default");
    setLoading(false);
    setWeatherData(data);
  };
  const getWeatherByCity = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d909c7f791a049ea70613e9382509195&units=metric`
    );
    const cityData = await response.json();
    const description = weatherCondition[cityData.weather[0].description];
    setWeatherData(cityData);
    setBgClass(description || "bg-default");
  };
  const bgClassChange = () => {
    const allBgClasses = ["bg-default", "bg-cloudy", "bg-rain", "bg-clear-sky"];
    document.body.classList.remove(...allBgClasses);
    document.body.classList.add(bgClass);
  };

  useEffect(() => {
    if (city === "current") {
      getCurrentLocation();
    } else {
      getWeatherByCity(city);
    }
  }, [city]);
  useEffect(() => {
    bgClassChange();
  }, [bgClass]);
  return loading ? (
    <div>
      <div className="container">
        <LodaingWindy />
      </div>
    </div>
  ) : (
    <div>
      <div className="container">
        <WeatherBox weatherData={weatherData} bgClass={bgClass} />
        <WeatherButton
          cities={cities}
          getCity={getCity}
          selectedCity={city}
          bgClass={bgClass}
        />
      </div>
    </div>
  );
}

export default App;
