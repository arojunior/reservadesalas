import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import Form from '../components/Form'
import {editReservas} from '../../../modules/Reservas/actions'

class EditReserva extends Component {
  handleSubmit = values => this.props.dispatch(editReservas(values))

  render() {
    if (!this.props.Reserva) {
      browserHistory.push('/reservas')
    }

    return (
      <div>
        <p className="pull-right">
          <Link to="/reservas" className="btn btn-default">Voltar</Link>
        </p>
        <div className="row">
          <div className="col-md-10">
            <Form
              salas={this.props.Salas}
              locais={this.props.Locais}
              onSubmit={this.handleSubmit}
              initialValues={this.props.Reserva}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  Salas: state.Salas.data,
  Locais: state.Locais.data,
  Reserva: state.Reservas.selected
})

export default connect(mapStateToProps)(EditReserva)
