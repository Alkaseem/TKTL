import React from "react";
import Weather from "./weather";

function ShowMore({ country }) {
  return (
    <div>
      {country && (
        <div>
          <h1>{country.name}</h1>
          <p>Capita {country.capital}</p>
          <p>Populations {country.population}</p>
          <h2>Languages</h2>
          {country.languages.map((ln, idx) => (
            <li key={idx}>{ln.name}</li>
          ))}
          <img
            src={country.flag}
            alt="country img"
            height="200px"
            width="150px"
          />
          <h2>Weather in {country.capital}</h2>

          <Weather countryCapital={country.capital} />
        </div>
      )}
    </div>
  );
}

export default ShowMore;
