import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import LinkedIn from './images/In.svg'
import Git from './images/Git.svg'

 const Footer = () => {
    return (
        <div>
            <Navbar  style={{backgroundColor:'#343a40', borderRadius: '2%'}} bg="dark" variant="dark">
    <Container>
      <Navbar.Brand style={{fontSize: '20px', fontFamily: 'Digital'}} href="https://www.linkedin.com/in/veikko-aho-3125077a/">
        <img
          alt=""
          src={LinkedIn}
          width="30"
          height="30"
          className="d-inline-block"
        />{' My Linked In'}
      </Navbar.Brand>
      <Navbar.Brand style={{fontSize: '20px', fontFamily: 'Digital'}} href="https://github.com/Vidfinnx">
        <img
          alt=""
          src={Git}
          width="30"
          height="30"
          className="d-inline-block"
        />{' My Github'}
      </Navbar.Brand>
    </Container>
  </Navbar> 
        </div>
    )
}

export default Footer;