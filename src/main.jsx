import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Dashboard,
  Error,
  Register,
  Login,
  Projects,
  ProjectSettings,
  Project,
} from "./pages";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
