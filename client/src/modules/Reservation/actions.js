import axios from '../services'
import {createAction} from 'redux-actions'
import {browserHistory} from 'react-router'
import dateFormat from 'dateformat'

export const RESERVATION_FETCHING = 'modules/Reservation/FETCHING'
export const RESERVATION_SUCCESS = 'modules/Reservation/SUCCESS'
export const RESERVATION_ERROR = 'modules/Reservation/ERROR'
export const RESERVATION_SELECT = 'modules/Reservation/SELECT'

const reservationFetching = createAction(RESERVATION_FETCHING)
const reservationError = createAction(RESERVATION_ERROR)
const reservationSuccess = createAction(RESERVATION_SUCCESS)

export const reservationSelect = createAction(RESERVATION_SELECT)

export const normalizeDatetime = values =>
  values.map(value => ({
    ...value,
    date_start: dateFormat(value.date_start, 'dd/mm/yyyy hh:MM:ss'),
    date_end: dateFormat(value.date_end, 'dd/mm/yyyy hh:MM:ss')
  }))

export const getReservation = () => ({
  type: [reservationFetching, reservationSuccess, reservationError],
  payload: {
    data: () => axios.get('/reservation')
  }
})

export const addReservation = values => dispatch =>
  axios
    .post('/reservation', values)
    .then(() => browserHistory.push('/reservation'))

export const editReservation = values => dispatch =>
  axios.put(`/reservation/${values._id}`, values)

export const deleteReservation = id => dispatch =>
  axios.delete(`/reservation/${id}`)
