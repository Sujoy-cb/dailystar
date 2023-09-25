import { createBrowserRouter } from "react-router-dom";
import home from "./home";
import news from './news';
import sports from './sports';
import fashion from './fashion';
import tech from './tech'
import business from './business'


const router = createBrowserRouter([home,news, sports, fashion, tech, business]);


export default router;