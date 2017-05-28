import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import Listagem from './components/Listagem'
import {getReservas} from '../../modules/Reservas/actions'

class Reservas extends Component {
  componentWillMount() {
    this.props.dispatch(getReservas())
  }
  render() {
    return (
      <div>
        <div>
          <span className="pull-right">
            <Link to="/reservas/nova" className="btn btn-primary">Nova</Link>
          </span>
        </div>
        <Listagem reservas={this.props.Reservas} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  Reservas: state.Reservas.data
})

export default connect(mapStateToProps)(Reservas)
