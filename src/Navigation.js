import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'





export default function Navigation(props) {
    return (
        <div className="Navigation">
<Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand  href="#home">Veikko Aho</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#about-me" onClick={() => props.renderAboutme()}>About-Me</Nav.Link>
      <Nav.Link href="#portfolio" onClick={() => props.renderContent()}>Portfolio</Nav.Link>
      <Nav.Link href="https://github.com/Vidfinnx/VidPort2/raw/main/Aho2020PDF.pdf">Resume</Nav.Link>
      <NavDropdown title="More Info" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#" onClick={() => props.renderForm()}>Contact-Me</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
