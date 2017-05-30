import React from 'react'
import {Link} from 'react-router'

const Menu = () => (
  <div className="list-group">
    <Link to="/reservas" className="list-group-item">Reservas</Link>
    <Link to="/usuarios" className="list-group-item">Usuários</Link>
  </div>
)

export default Menu
