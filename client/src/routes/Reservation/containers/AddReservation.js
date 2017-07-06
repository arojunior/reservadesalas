import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {compose, withHandlers} from 'recompose'

import Form from '../components/Form'
import {addReservation} from '../../../modules/Reservation/actions'

const AddReservation = ({Rooms, Places, handleSubmit, initialValues = {}}) =>
  <div>
    <p className="pull-right">
      <Link to="/reservation" className="btn btn-default">Back</Link>
    </p>
    <div className="row">
      <div className="col-md-10">
        <Form
          rooms={Rooms}
          places={Places}
          onSubmit={handleSubmit}
          initialValues={initialValues}
        />
      </div>
    </div>
  </div>

export default compose(
  connect(state => ({
    Rooms: state.Rooms.data,
    Places: state.Places.data
  })),
  withHandlers({
    handleSubmit: props => values => props.dispatch(addReservation(values))
  })
)(AddReservation)
