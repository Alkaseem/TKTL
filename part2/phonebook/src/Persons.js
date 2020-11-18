import React from "react";

function Persons({ filterSearch }) {
  return (
    <div>
      {filterSearch.map((n, idx) => (
        <p key={idx}>
          {n.name} {n.number}
        </p>
      ))}
    </div>
  );
}

export default Persons;
