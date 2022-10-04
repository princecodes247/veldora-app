import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import {
  Dashboard,
  Error,
  Signup,
  Login,
  Projects,
  ProjectSettings,
  Project,
} from "./pages";

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

  // {
  //   path: "/help",
  //   element: <Help />,
  // },
  // {
  //   path: "/settings",
  //   element: <Settings />,
  // },

  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:projectId",
    element: <Project />,
  },
  {
    path: "/projects/:projectId/analytics",
    element: <ProjectSettings />,
  },
  {
    path: "/projects/:projectId/settings",
    element: <ProjectSettings />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
