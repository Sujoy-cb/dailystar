import Footer from "../component/Footer";
import Navpart from "../component/Navpart";
import News from "../pages/News";

export default {
  path: "/news",
  element: (
    <>
      <Navpart />
      <News />
      <Footer/>
    </>
  ),
};
