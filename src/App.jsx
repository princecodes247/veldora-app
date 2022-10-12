import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Dashboard,
  Error,
  Signup,
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
