import { Container } from "react-bootstrap";
import News from "./pages/News";
import RecentNews from "./pages/RecentNews";

function App() {
  return (
    <>
      <div className="home_page">
        <Container fluid>
        <RecentNews/>
          <div className="top_news">
            <News />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
