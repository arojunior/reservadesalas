import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {compose, withHandlers, lifecycle} from 'recompose'

import Form from '../components/Form'
import {editReservation} from '../../../modules/Reservation/actions'

const EditReservationtion = ({Rooms, Places, Reservation, handleSubmit}) =>
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
          initialValues={Reservation}
        />
      </div>
    </div>
  </div>

export default compose(
  connect(state => ({
    Rooms: state.Rooms.data,
    Places: state.Places.data,
    Reservation: state.Reservation.selected
  })),
  withHandlers({
    handleSubmit: props => values => props.dispatch(editReservation(values))
  }),
  lifecycle({
    componentWillMount() {
      if (!this.props.Reservation) {
        browserHistory.push('/reservation')
      }
    }
  })
)(EditReservationtion)
