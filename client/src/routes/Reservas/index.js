import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import Listagem from './components/Listagem'
import {getReservas, reservaSelect} from '../../modules/Reservas/actions'

class Reservas extends Component {
  componentWillMount() {
    this.props.dispatch(getReservas())
  }

  handleBtEditar = reserva => {
    Promise.resolve(this.props.dispatch(reservaSelect(reserva))).then(() =>
      browserHistory.push('/reservas/editar')
    )
  }

  render() {
    return (
      <div>
        <div>
          <span className="pull-right">
            <Link to="/reservas/nova" className="btn btn-primary">Nova</Link>
          </span>
        </div>
        <Listagem
          reservas={this.props.Reservas}
          editReservas={this.handleBtEditar}
        />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  Reservas: state.Reservas.data
})

export default connect(mapStateToProps)(Reservas)
