import axios from "axios";

const API_KEY = "77798953dde8a4c290e26332071bd225";

const baseURL = "https://restcountries.eu/rest/v2/name/";
const wetherURL = `http://api.weatherstack.com/current?access_key=${API_KEY}`;

const getCountries = async (countryName) => {
  console.log("SERVICE", baseURL);
  console.log("SERVICE", `${baseURL}${countryName}`);
  try {
    const response = await axios.get(`${baseURL}${countryName}`);
    return response.data;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

const getWather = async (countryCapital, abc) => {
  try {
    const response = await axios.get(`${wetherURL}&query=${countryCapital}`, {
      siganl: abc.siganl,
    });
    return response.data;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export default { getCountries, getWather };
