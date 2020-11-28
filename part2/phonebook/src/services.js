import axios from "axios";

const baseURL = "http://localhost:3001/api/persons";
// const baseURL = "/api/persons";

const getAll = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.log("er", error.response);
    return error.response;
  }
};

const addPerson = async (newPerson) => {
  try {
    const response = await axios.post(`${baseURL}/add`, newPerson);
    return response;
  } catch (error) {
    console.log("er", error.response);
    return error.response;
  }
};

const updatePerson = async (id, newObj) => {
  try {
    const response = await axios.put(`${baseURL}/${id}/edit`, newObj);
    return response.data;
  } catch (error) {
    console.log("er", error.response);
    return error.response;
  }
};

const deletePerson = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}/delete`);
    return response.data;
  } catch (error) {
    console.log("er", error.response);
    return error.response;
  }
};

export default { getAll, addPerson, deletePerson, updatePerson };
