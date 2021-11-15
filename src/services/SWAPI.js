import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api";

const get = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
};

export const getPeople = async (page = null) => {
  return get(`/people/?page=${page}`); //{count: 23, nextPage: ... results: [...]}
};