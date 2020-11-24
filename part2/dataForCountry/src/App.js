import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

import ShowCountries from "./showCountries";
import SearchFrom from "./searchForm";
import ShowMore from "./showMore";

// const API_KEY = "77798953dde8a4c290e26332071bd225";

function App() {
  const [findCountry, setFindCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showMore, setShowMore] = useState(null);
  // const [weaher, setWeaher] = useState([]);

  const handleSearchChange = (e) => {
    setFindCountry(e.target.value);
    setIsLoading(true);
    setShowMore(null);
  };

  // const getWeather = async (countryCapital) => {
  //   const response = await axios.get(
  //     `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${countryCapital}`
  //     // `http://api.weatherstack.com/current?access_key=${API_KEY}&query=$Abuja`
  //   );
  //   console.log(response.data);
  //   setWeaher(response.data);
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://restcountries.eu/rest/v2/name/${findCountry}`
      );
      setCountries(response.data);
    };
    if (isLoading) {
      fetchData();
    }
  }, [findCountry, isLoading]);

  const showOne = () => {
    if (countries.length === 1) {
      return <ShowMore country={countries[0]} />;
    } else {
      return (
        <Fragment>
          {countries.length >= 10 ? (
            <p>Too many matches, specify another filter</p>
          ) : (
            countries.map((ctry, idx) => (
              <ShowCountries
                key={idx}
                countries={ctry}
                setShowMore={setShowMore}
                country={showMore}
              />
            ))
          )}
        </Fragment>
      );
    }
  };

  return (
    <Fragment>
      <SearchFrom
        handleSearchChange={handleSearchChange}
        findCountry={findCountry}
      />
      {showMore ? <ShowMore country={showMore} /> : showOne()}
    </Fragment>
  );
}

export default App;
