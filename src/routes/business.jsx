import Footer from "../component/Footer";
import Navpart from "../component/Navpart";
import Business from "../pages/Business";

export default {
  path: "/business",
  element: (
    <>
      <Navpart />
      <Business />
      <Footer/>
    </>
  ),
};
