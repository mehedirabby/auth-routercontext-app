import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import PrivateRout from "./Routes/PrivateRout";
import Orders from "./Component/Orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: (
            <PrivateRout>
              {" "}
              <Home></Home>
            </PrivateRout>
          ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/orders",
          element: (
            <PrivateRout>
              <Orders></Orders>
            </PrivateRout>
          ),
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
