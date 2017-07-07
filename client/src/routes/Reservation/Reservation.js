import React from 'react'
import {Link} from 'react-router'

import Listagem from './components/List'

export default ({Reservations, handleEditButton, handleDeleteButton}) =>
  <div>
    <div>
      <span className="pull-right">
        <Link to="/reservation/add" className="btn btn-primary">
          New
        </Link>
      </span>
    </div>
    <Listagem
      reservation={Reservations}
      editReservation={handleEditButton}
      deleteReservation={handleDeleteButton}
    />
  </div>
