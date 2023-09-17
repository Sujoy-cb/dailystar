import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import dynamicnav from "../dynamicNav/dynamicNav.json";

const Navpart = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/images/logo.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <ul className="d-flex">
                {dynamicnav.map((item) => (
                  <li key={item.id}>
                    <a href="#">{item.title}</a>
                  </li>
                ))}
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navpart;
