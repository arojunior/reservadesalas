import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import Form from '../components/Form'
import {addReservas} from '../../../modules/Reservas/actions'

class AddReserva extends Component {
  handleSubmit = values => this.props.dispatch(addReservas(values))
  render() {
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
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  Salas: state.Salas.data,
  Locais: state.Locais.data
})

export default connect(mapStateToProps)(AddReserva)
