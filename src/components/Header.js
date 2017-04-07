import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import About from './About.js'

class Header extends React.Component{
  render() {
    return (
<Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Sammi Ber™</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <Navbar.Brand> 
            <a href="/About">About</a>
        </Navbar.Brand>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default Header;
