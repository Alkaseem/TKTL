import React from "react";

function SerachForm({ handleSearchChange, findCountry }) {
  return (
    <div>
      Find countries :{" "}
      <input type="search" onChange={handleSearchChange} value={findCountry} />
    </div>
  );
}

export default SerachForm;
