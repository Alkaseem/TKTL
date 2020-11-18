import React from "react";

function Filter({ searched, setSearch }) {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div>
        Filter shown with :{" "}
        <input type="search" onChange={handleSearchChange} value={searched} />
      </div>
    </div>
  );
}

export default Filter;
