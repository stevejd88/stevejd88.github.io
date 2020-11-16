import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import Resume from "../../assets/stevenDeavila.pdf";
import "./mainNav.scss";

const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='light' variant='light' fixed='top'>
      <Navbar.Brand>
        <a
          className='navbar-brand order-1'
          href='https://www.linkedin.com/in/steven-de-avila-71198038/'
          target='_blank'
          rel='noopener noreferrer'
        >
          SD
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link eventKey='1' as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link eventKey='2' as={Link} to='/portfolio'>
            Portfolio
          </Nav.Link>
          <Nav.Link eventKey='3' as={Link} to='/about'>
            About
          </Nav.Link>
          <Nav.Link eventKey='4' as={Link} to='/skills'>
            Skills
          </Nav.Link>
          <Nav.Link eventKey='5' as={Link} to='/contact'>
            Contact
          </Nav.Link>
          <a eventKey='6' className='nav-link' href={Resume} download>
            Resume
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
