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

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(
      "interceptor error",
      error,
      error?.response?.data?.errors?.message
    );
    if (
      error?.response?.data?.errors?.message
        .toLowerCase()
        .includes("unauthorized access:")
    ) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      console.log("interceptor errorssq");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export { baseURL, authApi };
export default api;
