import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts";
import Ingredients from "./pages/Ingredients";
import Tools from "./pages/Tools";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/ingredients",
          element: <Ingredients />,
        },
        {
          path: "/tools",
          element: <Tools />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
