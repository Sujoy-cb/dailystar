import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import dynamicnav from '/dynamicNav.json'
import { Link } from "react-router-dom";

const Navpart = () => {
  let [nav, setNav] = useState([])

  useEffect(()=>{
    const getNav = async ()=>{
      const response = await fetch('/dynamicNav.json')
      const data = await response.json()
      setNav(data)
    }
    getNav()
  },[])

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            <img
              src="/images/logo.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <ul className="d-flex">
                {nav.map((item) => (
                  <li key={item.id}>
                  {/* <a href={item.link}>{item.title}</a> */}
                    <Link to={item.link}>{item.title}</Link>
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
