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
      <NavItem eventKey={1} href="/home">
        Home
      </NavItem>
      <NavItem eventKey={2} href="/">
        Logout
      </NavItem>
    </Nav>
  </Navbar>

export default Navigation
