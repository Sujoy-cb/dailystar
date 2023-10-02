import { Container } from "react-bootstrap";
import News from "./pages/News";
import RecentNews from "./pages/RecentNews";
import Sports from "./pages/Sports";
import Business from "./pages/Business";
import Tech from "./pages/Tech";

function App() {
  return (
    <>
      <div className="home_page">
        <Container fluid>
          <RecentNews />
          <News />
          <Sports />
          <Business />
          <Tech />
        </Container>
      </div>
    </>
  );
}

export default App;
