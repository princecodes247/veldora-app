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

const AuthAPI = { signIn, signOut, signUp };

export default AuthAPI;
