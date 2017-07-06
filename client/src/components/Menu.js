import React from 'react'
import {Link} from 'react-router'
import {ListGroup} from 'react-bootstrap'

const Menu = () =>
  <ListGroup>
    <Link to="/reservation" className="list-group-item">
      Reservation
    </Link>
    <Link to="/users" className="list-group-item">
      Users
    </Link>
  </ListGroup>

export default Menu
