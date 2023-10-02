import Footer from "../component/Footer";
import Navpart from "../component/Navpart";
import Fashion from "../pages/Fashion";

export default {
  path: "/fashion",
  element: (
    <>
      <Navpart />
      <Fashion />
      <Footer />
    </>
  ),
};
