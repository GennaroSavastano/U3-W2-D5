import "./App.css";
import CityWeather from "./Components/CityWeather";
import SuperInput from "./Components/SuperInput";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <SuperInput />
      <CityWeather />
    </>
  );
}

export default App;
