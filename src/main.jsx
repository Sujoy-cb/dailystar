import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
// import Navpart from "./component/Navpart";
import "./index.css";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <Navpart /> */}
    <RouterProvider router={router} />
  </>,
);
