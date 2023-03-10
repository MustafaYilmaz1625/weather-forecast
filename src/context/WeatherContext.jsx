import { createContext, useState, useEffect } from "react";
import axios from "axios";
const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("Ankara");

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await axios(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${`${location},tr`}&key=e31fa12bf84048fea092a1dff465f9ff&lang=tr`
        );
        setWeather(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeatherData();
  }, [location]);

  const values = {
    weather,
    setWeather,
    location,
    setLocation,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}

export default WeatherContext;
