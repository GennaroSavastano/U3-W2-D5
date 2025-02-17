import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { useState } from "react";
import CityWeather from "./Components/CityWeather";
import Home from "./Components/Home";
import SuperInput from "./Components/SuperInput";
import TopBar from "./Components/TopBar";
import {
  CloudHaze2,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudRainHeavy,
  Clouds,
  CloudSun,
  Cloudy,
  Moon,
  Snow,
  Sun,
} from "react-bootstrap-icons";

function App() {
  const [forecast, setForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);

  const handleIcons = (weatherCode) => {
    switch (weatherCode) {
      case `01d`:
        return <Sun />;
      case `01n`:
        return <Moon />;
      case `02d`:
        return <CloudSun />;
      case `02n`:
        return <CloudMoon />;
      case `03d`:
      case `03n`:
        return <Cloudy />;
      case `04d`:
      case `04n`:
        return <Clouds />;
      case `09d`:
      case `09n`:
        return <CloudRain />;
      case `10d`:
      case `10n`:
        return <CloudRainHeavy />;
      case `11d`:
      case `11n`:
        return <CloudLightning />;
      case `13d`:
      case `13n`:
        return <Snow />;
      case `50d`:
      case `50n`:
        return <CloudHaze2 />;
      default:
        return <Sun />;
    }
  };

  return (
    <>
      <BrowserRouter>
        <TopBar />
        <SuperInput setForecast={setForecast} setDailyForecast={setDailyForecast} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                forecast={forecast}
                dailyForecast={dailyForecast}
                handleIcons={handleIcons}
                setForecast={setForecast}
                setDailyForecast={setDailyForecast}
              />
            }
          />
          <Route
            path="/your-forecast"
            element={<CityWeather forecast={forecast} dailyForecast={dailyForecast} handleIcons={handleIcons} />}
          />
          <Route path="*" element={<div>404 - Pagina Sconosciuta !!!</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
