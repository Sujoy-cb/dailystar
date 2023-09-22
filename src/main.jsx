import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import News from "./pages/News";
import Sports from "./pages/Sports";
import Business from "./pages/Business";
import Tech from "./pages/Tech";
import Fashion from "./pages/Fashion";
import Navpart from "./component/Navpart";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/sports",
    element: <Sports/>,
  },
  {
    path: "/business",
    element: <Business/>,
  },
  {
    path: "/tech",
    element: <Tech/>,
  },
  {
    path: "/fashion",
    element: <Fashion/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navpart />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
