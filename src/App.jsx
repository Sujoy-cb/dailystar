import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="home_page">
        <Container fluid>
          <Row>
            <Col xs={6}>
              <div
                className="check bg-primary "
                style={{ height: "100px" }}></div>
            </Col>
            <Col xs={6}>
              <div
                className="check bg-danger "
                style={{ height: "100px" }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
