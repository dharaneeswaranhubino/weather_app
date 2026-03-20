import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import bgVideo from "../assets/background_gif.mp4"

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

const DisplayWeather = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  const API_KEY = "4c5d5ae9618ba460af32900b4b9cd38c";

  const getWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      
      const data = await response.json();
      
      if (data.cod !== 200) {
        setError("City not found. Try another city.");
        setWeather(null);
        return;
      }
      
      setWeather(data);
      setError("");
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="app">
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4"/>
      </video>
      <div className="weather-card">
        <h2>Weather App</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && getWeather()}
          />
          <button onClick={getWeather}>
            <AiOutlineSearch size={20} />
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        {weather ? (
          <div className="weather-info">
            <h2>{weather.name}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
            <h3>{weather.main.temp}°C</h3>
            <p>{weather.weather[0].description}</p>

            <div className="details">
              <div>
                <WiHumidity size={30} />
                <p>Wind humidity %</p>
                <p>{weather.main.humidity}%</p>
              </div>

              <div>
                <FaWind size={30} />
                <p>Wind speed km/h</p>
                <p>{weather.wind.speed} km/h</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="weather-info">
            <h2>City Name</h2>
            {/* <img
              // src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
            /> */}
            <h3>0°C</h3>
            <p>Weather description</p>

            <div className="details">
              <div>
                <WiHumidity size={30} />
                <p>Wind humidity%</p>
              </div>

              <div>
                <FaWind size={25} />
                <p>Wind speed km/h</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayWeather;
