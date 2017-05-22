import React from 'react'
import {Link} from 'react-router'

const Menu = () => (
  <div className="list-group">
    <Link to="/reservas" className="list-group-item">Reservas</Link>
    <a href="#" className="list-group-item">Salas</a>
    <a href="#" className="list-group-item">Filiais</a>
    <a href="#" className="list-group-item">Usuários</a>
  </div>
)

export default Menu
