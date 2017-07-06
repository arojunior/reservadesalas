import React from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

const Navigation = () =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" href="/home">
          Room Reservation
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1}>
        <Link to="/home">Home</Link>
      </NavItem>
      <NavItem eventKey={2}>
        <Link to="/">Logout</Link>
      </NavItem>
    </Nav>
  </Navbar>

export default Navigation
