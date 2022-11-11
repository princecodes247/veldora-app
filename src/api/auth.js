import api from "./config";

const signIn = (email, password) => {
  return api.post("/api/v1/auth/signin", { email, password });
};

const signOut = () => {
  return api.delete("/api/v1/auth/signout");
};

const signUp = (name, email, password) => {
  return api.post("/api/v1/auth/signup", {
    name,
    email,
    password,
    // passwordConfirmation,
  });
};

export const refreshAccessToken = async () => {
  const response = await api.get("auth/refresh");
  return response.data;
};

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message;
    if (errMessage.includes("Invalid token") && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessToken();
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

const AuthAPI = { signIn, signOut, signUp };

export default AuthAPI;
