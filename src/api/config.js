import axios from "axios";

const baseURL = "http://localhost:2021";
// const baseURL = "https://veldora-api.onrender.com/";

const authApi = axios.create({
  baseURL,
});
const api = axios.create({
  baseURL,
  // withCredentials: true,
  // credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

export { baseURL, authApi };
export default api;
