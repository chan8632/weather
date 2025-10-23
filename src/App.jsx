import { useEffect, useState } from "react";

function App() {
  const [json, setJson] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getCurPosWeatherJson();
  }, []);
  const getCurPosWeatherJson = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=d909c7f791a049ea70613e9382509195`
      );
      const json = await response.json();
      console.log(json);
      setLoading(false);
      setJson(json);
    });
  };

  return loading ? (
    "loading"
  ) : (
    <div>
      <div className="timezone">{json.timezone}</div>
      <div className="c">{json.current.temp}</div>
        <div className="f">{((json.current.temp)*9/5)+32}</div>
      <div className="description">{json.current.weather[0].description}</div>
    </div>
  );
}

export default App;
