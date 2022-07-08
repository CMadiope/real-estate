import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/LogoMakr-0xpOA1.png";

const NavTop = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <Image src={logo} alt='logo' width={90} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <NavDropdown title='BUY' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Commercial</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Residential
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/sell'>SELL</Nav.Link>
            <NavDropdown title='RENT' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Landlords</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Rentals made easy
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/commercial'>COMMERCIAL</Nav.Link>
            <Nav.Link href='/finance'>FINANCE</Nav.Link>
            <Nav.Link href='/join-us'>JOIN-US</Nav.Link>
            <Nav.Link href='/blog'>BLOG</Nav.Link>
            <Nav.Link href='/contact'>CONTACT</Nav.Link>
            <Nav.Link href='/covid-19'>COVID-19</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>More</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavTop;
