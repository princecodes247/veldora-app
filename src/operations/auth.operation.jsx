import { useMutation } from "@tanstack/react-query";
import AuthAPI from "../api/auth";

const signin = (data) => {
  const signinMutation = useMutation(AuthAPI.signIn, {
    onSuccess: () => {
      // navigation.navigate("Login");
      console.log("success");
    },
  });

  signinMutation.mutate(data);
};

const AuthOperations = {
  signin,
};

export default AuthOperations;
