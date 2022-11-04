import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export default function useRequireAuth(redirectUrl = "/login") {
  const auth = useAuth();
  const navigate = useNavigate();

  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.user === false) {
      navigate(redirectUrl);
    }
  }, [auth, navigate]);

  return auth;
}
