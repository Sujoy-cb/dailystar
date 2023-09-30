import { Container } from "react-bootstrap";
import News from "./pages/News";
import RecentNews from "./pages/RecentNews";
import Sports from "./pages/Sports";

function App() {
  return (
    <>
      <div className="home_page">
        <Container fluid>
          <RecentNews />
          <News />
          <Sports />
        </Container>
      </div>
    </>
  );
}

export default App;
