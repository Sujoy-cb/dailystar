import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navpart = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/images/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            
            <NavDropdown title="News" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bangladesh</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Investigative Stories
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Asia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                World
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navpart;