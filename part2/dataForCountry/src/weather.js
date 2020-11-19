import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "";

function Weather({ countryCapital }) {
  const [weaher, setWeaher] = useState("");

  useEffect(() => {
    const abc = new AbortController();
    const fetchWather = async () => {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${countryCapital}`,
        { signal: abc.signal }
      );
      setWeaher(response.data);
    };
    fetchWather();
    return () => abc.abort();
  }, [countryCapital]);

  return (
    weaher && (
      <div>
        <p>
          <strong>Tempreture:</strong> {weaher.current.temperature} Celcius
        </p>
        <img src={weaher.current.weather_icons[0]} alt="weaher" />
        <p>
          <strong>Wind:</strong> {weaher.current.wind_speed} mph direction{" "}
          {weaher.current.wind_dir}
        </p>
      </div>
    )
  );
}

export default Weather;

// http://api.weatherstack.com/current?access_key=77798953dde8a4c290e26332071bd225&query=Abuja
