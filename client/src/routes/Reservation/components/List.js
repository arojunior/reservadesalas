import React from 'react'

const List = props => {
  const tbody = props.reservationtion
    ? props.reservationtion.map(reservation =>
        <tr key={reservation._id}>
          <td>{reservation.description}</td>
          <td>{reservation.owner}</td>
          <td>{reservation.place}</td>
          <td>{reservation.room}</td>
          <td>{reservation.date_start}</td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => props.editReservation(reservation)}>
              Edit
            </button>
            {' '}
            <button
              className="btn btn-warning"
              onClick={() => props.deleteReservation(reservation)}>
              Delete
            </button>
          </td>
        </tr>
      )
    : null
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Desc.</th>
          <th>Resp.</th>
          <th>Place</th>
          <th>Room</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tbody}
      </tbody>
    </table>
  )
}

export default List
