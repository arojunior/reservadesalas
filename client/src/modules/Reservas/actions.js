import axios from 'axios'
import {createAction} from 'redux-actions'

export const RESERVA_FETCHING = 'modules/Reservas/FETCHING'
export const RESERVA_SUCCESS = 'modules/Reservas/SUCCESS'
export const RESERVA_ERROR = 'modules/Reservas/ERROR'
export const RESERVA_SELECT = 'modules/Reservas/SELECT'

const reservaFetching = createAction(RESERVA_FETCHING)
const reservaError = createAction(RESERVA_ERROR)
const reservaSuccess = createAction(RESERVA_SUCCESS)
export const reservaSelect = createAction(RESERVA_SELECT)

axios.defaults.baseURL = 'http://localhost:3001'

export const getReservas = () => ({
  type: [reservaFetching, reservaSuccess, reservaError],
  payload: {
    data: () => axios.get('/reservas')
  }
})

export const addReservas = values => ({
  type: [reservaFetching, reservaSuccess, reservaError],
  payload: {
    data: () => axios.post('/reservas', values)
  }
})

export const editReservas = values => ({
  type: [reservaFetching, reservaSuccess, reservaError],
  payload: {
    data: () => axios.put(`/reservas/${values._id}`, values)
  }
})

export const deleteReservas = id => ({
  type: [reservaFetching, reservaSuccess, reservaError],
  payload: {
    data: () => axios.delete(`/reservas/${id}`)
  }
})
