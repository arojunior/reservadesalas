import React, {Component} from 'react'
import {Link} from 'react-router'

import Listagem from './components/Listagem'

class Reservas extends Component {
  render() {
    return (
      <div>
        <div>
          <span className="pull-right">
            <Link to="/reservas/nova" className="btn btn-primary">Nova</Link>
          </span>
        </div>
        <Listagem />
      </div>
    )
  }
}

export default Reservas
