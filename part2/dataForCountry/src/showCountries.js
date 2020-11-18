import React from "react";

function showCountries({ countries, setShowMore }) {
  const handleClick = () => {
    setShowMore(countries);
  };

  return (
    <div>
      {countries.name} <button onClick={handleClick}>show</button>
    </div>
  );
}

export default showCountries;
