import {browserHistory} from 'react-router'
import {reservationSelect, deleteReservation} from './actions'

export const handleEditButton = props => reservation => {
  Promise.resolve(props.dispatch(reservationSelect(reservation))).then(() =>
    browserHistory.push('/reservation/edit')
  )
}

export const handleDeleteButton = props => reservation => {
  const conf = confirm(
    `Are you sure you want to delete [${reservation.descricao}] ?`
  )

  if (conf) {
    props.dispatch(deleteReservation(reservation._id))
  }
}
