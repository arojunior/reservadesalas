import React from 'react'
import {Link} from 'react-router'
import Form from '../components/Form'

const ReservaNova = () => (
  <div>
    <p className="pull-right">
      <Link to="/reservas" className="btn btn-default">Voltar</Link>
    </p>
    <div className="row">
      <div className="col-md-10">
        <Form />
      </div>
    </div>
  </div>
)

export default ReservaNova
