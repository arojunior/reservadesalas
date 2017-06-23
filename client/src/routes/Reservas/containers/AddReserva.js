import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {compose, withHandlers} from 'recompose'
import Form from '../components/Form'
import {addReservas} from '../../../modules/Reservas/actions'

const AddReserva = ({Salas, Locais, handleSubmit, initialValues = {}}) =>
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
          initialValues={initialValues}
        />
      </div>
    </div>
  </div>

export default compose(
  connect(state => ({
    Salas: state.Salas.data,
    Locais: state.Locais.data
  })),
  withHandlers({
    handleSubmit: props => values => props.dispatch(addReservas(values))
  })
)(AddReserva)
