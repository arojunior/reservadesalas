import React from 'react'
import {compose} from 'recompose'

const Table = body =>
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
      {body}
    </tbody>
  </table>

const Rows = ({reservation, editReservation, deleteReservation}) =>
  reservation.map(reservation =>
    <tr key={reservation._id}>
      <td>
        {reservation.description}
      </td>
      <td>
        {reservation.owner}
      </td>
      <td>
        {reservation.place}
      </td>
      <td>
        {reservation.room}
      </td>
      <td>
        {reservation.date_start}
      </td>
      <td>
        <button
          className="btn btn-info"
          onClick={() => editReservation(reservation)}>
          Edit
        </button>{' '}
        <button
          className="btn btn-warning"
          onClick={() => deleteReservation(reservation)}>
          Delete
        </button>
      </td>
    </tr>
  )

export default compose(Table, props => Rows(props))
