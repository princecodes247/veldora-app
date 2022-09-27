import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Dashboard } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
