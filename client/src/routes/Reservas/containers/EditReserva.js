import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {compose, withHandlers, lifecycle} from 'recompose'

import Form from '../components/Form'
import {editReservas} from '../../../modules/Reservas/actions'

const EditReserva = ({Salas, Locais, Reserva, handleSubmit}) =>
  <div>
    <p className="pull-right">
      <Link to="/reservas" className="btn btn-default">Voltar</Link>
    </p>
    <div className="row">
      <div className="col-md-10">
        <Form
          salas={Salas}
          locais={Locais}
          onSubmit={handleSubmit}
          initialValues={Reserva}
        />
      </div>
    </div>
  </div>

export default compose(
  connect(state => ({
    Salas: state.Salas.data,
    Locais: state.Locais.data,
    Reserva: state.Reservas.selected
  })),
  withHandlers({
    handleSubmit: props => values => props.dispatch(editReservas(values))
  }),
  lifecycle({
    componentWillMount() {
      if (!this.props.Reserva) {
        browserHistory.push('/reservas')
      }
    }
  })
)(EditReserva)
