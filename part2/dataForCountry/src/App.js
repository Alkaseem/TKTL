import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

import ShowCountries from "./showCountries";
import SearchFrom from "./searchForm";
import ShowMore from "./showMore";

function App() {
  const [findCountry, setFindCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showMore, setShowMore] = useState(null);

  const handleSearchChange = (e) => {
    setFindCountry(e.target.value);
    setIsLoading(true);
    setShowMore(null);
  };

  useEffect(() => {
    const abc = new AbortController();

    const fetchData = async () => {
      const response = await axios.get(
        `https://restcountries.eu/rest/v2/name/${findCountry}`,
        { signal: abc.signal }
      );
      setCountries(response.data);
    };
    if (isLoading) {
      fetchData();
    }
    return () => abc.abort();
  }, [findCountry, isLoading]);

  const showOne = () => {
    if (countries.length === 1) {
      // return <ShowOne countries={countries} />;
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
