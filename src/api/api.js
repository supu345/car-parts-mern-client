import axios from "axios";
const api = axios.create({
  //baseURL: "https://car-parts-mern-api.onrender.com",

  baseURL: "http://localhost:5000",
  withCredentials: true,
});
export default api;
