import React from "react";

function Persons({ filterSearch, handleDelete }) {
  return (
    <div>
      {filterSearch.map((n, idx) => (
        <p key={idx}>
          {n.name} {n.number}{" "}
          <button onClick={() => handleDelete(n)}>delete</button>
        </p>
      ))}
    </div>
  );
}

export default Persons;
