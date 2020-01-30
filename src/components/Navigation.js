import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'


const Navigation = () => {
    return (
       <div>
 <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Code Bootcamp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="Resources" id="basic-nav-dropdown">
          <NavDropdown.Item className="navBarLink" href="./frontend">Front End</NavDropdown.Item>
          <NavDropdown.Item className="navBarLink" href="./backend">Back End</NavDropdown.Item>
          <NavDropdown.Item className="navBarLink" href="./dataanalysis">Data Analysis</NavDropdown.Item>
          <NavDropdown.Item className="navBarLink" href="./mobileapps">Mobile Applications</NavDropdown.Item>
    </NavDropdown>   
    </Nav>
    </Navbar.Collapse>
  </Navbar> 
       </div>
   
    );
}
 
export default Navigation;
