import React from 'react'
import {Link} from 'react-router'

const Menu = () =>
  <div className="list-group">
    <Link to="/reservation" className="list-group-item">Reservation</Link>
    <Link to="/users" className="list-group-item">Users</Link>
  </div>

export default Menu
