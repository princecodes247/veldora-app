import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Dashboard, Error } from "./pages";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Form from "./pages/Form";
import FormSettings from "./pages/Form/settings";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/form/:formId",
    element: <Form />,
  },
  {
    path: "/form/:formId/analytics",
    element: <FormSettings />,
  },
  {
    path: "/form/:formId/settings",
    element: <FormSettings />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
