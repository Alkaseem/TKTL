import React, { useState } from "react";

import personService from "./services";

function PersonForm({ setPersons, persons, updateNumber, setMessage }) {
  const [newName, setName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newObj = { name: newName, number: newNumber };
    const person = persons.find((p) => p.name === newObj.name);
    let editing = false;
    if (person && person.name === newObj.name) {
      const option = window.confirm(
        `${person.name} is already added to the phonebook, replace the old number with new a number`
      );
      editing = option;
    }
    if (editing) {
      updateNumber(newObj);
    } else {
      const response = await personService.addPerson(newObj);
      console.log("DATA", response);
      if (response.status === 200) {
        setPersons(persons.concat(response.data));
        setMessage({ alert: "success", msg: `Added ${newObj.name}` });
      } else {
        setMessage({ alert: "error", msg: response.data.error });
      }
    }
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
