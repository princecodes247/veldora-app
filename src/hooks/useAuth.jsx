import React, { useState, useEffect, useContext, createContext } from "react";
import AuthAPI from "../api/auth";
import useLocalStorage from "./useLocalStorage";

const authContext = createContext();

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useLocalStorage("user", null);
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", null);
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", null);

  // Wrap any Auth methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return AuthAPI.signIn(email, password)
      .then((response) => {
        console.log(response?.data);
        setUser(response?.data?.user);
        setRefreshToken(response?.data?.refreshToken);
        setAccessToken(response?.data?.accessToken);
        return response?.data?.user;
      })
      .catch(() => false);
    // return AuthOperations.signin(email, password);
  };

  const signup = (name, email, password) => {
    return AuthAPI.signUp(name, email, password)
      .then((response) => {
        setUser(response?.data?.user);
        setRefreshToken(response?.data?.refreshToken);
        setAccessToken(response?.data?.accessToken);
        return response.user;
      })
      .catch(() => false);
  };

  const signout = () => {
    return AuthAPI.signOut().then(() => {
      setUser(false);
      setRefreshToken(false);
      setAccessToken(false);
    });
  };

  const sendPasswordResetEmail = (email) => {
    // return firebase
    //   .auth()
    //   .sendPasswordResetEmail(email)
    //   .then(() => {
    //     return true;
    //   });
  };

  const confirmPasswordReset = (code, password) => {
    // return firebase
    //   .auth()
    //   .confirmPasswordReset(code, password)
    //   .then(() => {
    //     return true;
    //   });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  // useEffect(() => {
  // const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     setUser(user);
  //   } else {
  //     setUser(false);
  //   }
  // });

  // const unsubscribe = () => {};
  // Cleanup subscription on unmount
  // return () => unsubscribe();
  // }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
