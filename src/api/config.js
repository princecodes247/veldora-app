import axios from "axios";

const api = axios.create({
  baseURL: "https://veldora-api.onrender.com/",
});
api.defaults.headers.common["Content-Type"] = "application/json";
export default api;
