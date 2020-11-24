import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.API_KEY;

function Weather({ countryCapital }) {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    console.log("HELLO");
    const abc = new AbortController();
    const fetchWather = async () => {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${countryCapital}`,
        { signal: abc.signal }
      );
      setWeather(response.data);
    };
    fetchWather();
    return () => abc.abort();
  }, [countryCapital]);

  return (
    weather && (
      <div>
        <p>
          <strong>Tempreture:</strong> {weather.current.temperature} Celcius
        </p>
        <img src={weather.current.weather_icons[0]} alt="weaher" />
        <p>
          <strong>Wind:</strong> {weather.current.wind_speed} mph direction{" "}
          {weather.current.wind_dir}
        </p>
      </div>
    )
  );
}

export default Weather;

// http://api.weatherstack.com/current?access_key=77798953dde8a4c290e26332071bd225&query=Abuja
