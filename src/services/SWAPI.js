import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api";

const get = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
};

export const getPeople = async (page = null, query=null) => {
  return get(`/people/?search=${query}&page=${page}`);
};
