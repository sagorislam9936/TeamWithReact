import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbarr.css";

const Navbarr = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container className="bg">
          <Navbar.Brand className="p-2 team" href="#home">
            SR TEAM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="nav" id="responsive-navbar-nav">
            <Nav className="me-auto nav">
              <Nav.Link className="text" href="#Home">
                Home
              </Nav.Link>
              <Nav.Link className="text" href="#Landing">
                Landing
              </Nav.Link>
              <Nav.Link className="text" href="#About">
                About
              </Nav.Link>
              <Nav.Link className="text" href="#Team">
                Team
              </Nav.Link>
              <Nav.Link className="text" href="#Contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
