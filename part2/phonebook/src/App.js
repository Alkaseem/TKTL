import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searched, setSearch] = useState("");

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/persons");
    setPersons(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterSearch = persons.filter((person) => {
    return person.name.indexOf(searched) !== -1;
  });

  return (
    <div>
      <h1>Phonebook</h1>

      {/* filter */}
      <Filter searched={searched} setSearch={setSearch} />

      <h2>Add a new</h2>

      {/* Form */}
      <PersonForm setPersons={setPersons} persons={persons} />

      <h2>Numbers</h2>

      {/* Persons */}
      <Persons filterSearch={filterSearch} />
    </div>
  );
};

export default App;
