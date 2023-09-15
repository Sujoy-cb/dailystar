import { createBrowserRouter } from "react-router-dom";
import home from "./home";
import news from "./news";
import opinion from "./opinion";

const router = createBrowserRouter([home,news,opinion])

export default router;