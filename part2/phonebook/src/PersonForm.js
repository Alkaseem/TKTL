import React, { useState } from "react";

function PersonForm({ setPersons, persons }) {
  const [newName, setName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newNames = { name: newName, number: newNumber };
    setPersons(persons.concat(newNames));
    setName("");
    setNewNumber("");
  };

  const handleNameChnage = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChnage = (e) => {
    setNewNumber(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input type="text" value={newName} onChange={handleNameChnage} />
          <div>
            number:{" "}
            <input type="text" value={newNumber} onChange={handlePhoneChnage} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
