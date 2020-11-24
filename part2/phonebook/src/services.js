import axios from "axios";

const baseURL = "http://localhost:3001/persons";

const getAll = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

const addPerson = async (newPerson) => {
  try {
    const response = await axios.post(baseURL, newPerson);
    return response.data;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

const deletePerson = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

const updatePerson = async (id, newObj) => {
  try {
    const response = await axios.put(`${baseURL}/${id}`, newObj);
    return response.data;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export default { getAll, addPerson, deletePerson, updatePerson };
