import React, { useState, useEffect } from "react";

import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Notification from "./Notifiactions";

import personService from "./services";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searched, setSearch] = useState("");
  const [message, setMessage] = useState({
    msg: "",
    alert: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const getAllPersons = await personService.getAll();
      setPersons(getAllPersons);
    };
    fetchData();
  }, []);

  const filterSearch = persons.filter((person) => {
    return person.name.indexOf(searched) !== -1;
  });

  const updateNumber = async (per) => {
    const person = persons.find((p) => p.name === per.name);
    const updateP = { ...person, number: per.number };

    await personService.updatePerson(person.id, updateP);

    const getAllPersons = await personService.getAll();

    setPersons(getAllPersons);
    setMessage({
      alert: "warning",
      msg: `${updateP.name} number is replaced with the new number`,
    });
  };

  const handleDelete = async (data) => {
    const option = window.confirm(`Delete ${data.name} ?`);
    if (option) {
      await personService.deletePerson(data.id);
      const modifyPersons = persons.filter((p) => p.id !== data.id);
      setPersons(modifyPersons);
      setMessage({ alert: "error", msg: `${data.name} is deleted` });
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} setMessage={setMessage} />
      {/* filter */}
      <Filter searched={searched} setSearch={setSearch} />

      <h2>Add a new</h2>

      {/* Form */}
      <PersonForm
        setPersons={setPersons}
        updateNumber={updateNumber}
        persons={persons}
        setMessage={setMessage}
      />

      <h2>Numbers</h2>

      {/* Persons */}
      <Persons filterSearch={filterSearch} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
