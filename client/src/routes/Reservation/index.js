import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {compose, withHandlers, lifecycle} from 'recompose'

import Listagem from './components/List'
import {
  getReservation,
  reservationSelect,
  deleteReservation
} from '../../modules/Reservation/actions'

const Reservation = ({Reservation, handleEditButton, handleDeleteButton}) =>
  <div>
    <div>
      <span className="pull-right">
        <Link to="/reservation/add" className="btn btn-primary">New</Link>
      </span>
    </div>
    <Listagem
      reservation={Reservation}
      editReservation={handleEditButton}
      deleteReservation={handleDeleteButton}
    />
  </div>

const handleEditButton = props => reservation => {
  Promise.resolve(props.dispatch(reservationSelect(reservation))).then(() =>
    browserHistory.push('/reservation/edit')
  )
}

const handleDeleteButton = props => reservation => {
  const conf = confirm(
    `Are you sure you want to delete [${reservation.descricao}] ?`
  )

  if (conf) {
    props.dispatch(deleteReservation(reservation._id))
  }
}

export default compose(
  connect(state => ({
    Reservation: state.Reservation.data
  })),
  withHandlers({
    handleEditButton,
    handleDeleteButton
  }),
  lifecycle({
    componentWillMount() {
      this.props.dispatch(getReservation())
    }
  })
)(Reservation)
