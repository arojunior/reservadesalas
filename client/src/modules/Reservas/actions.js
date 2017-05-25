import axios from 'axios'
import {createAction} from 'redux-actions'

export const RESERVA_FETCHING = 'modules/Reservas/FETCHING'
export const RESERVA_SUCCESS = 'modules/Reservas/SUCCESS'
export const RESERVA_ERROR = 'modules/Reservas/ERROR'

const reservaFetching = createAction(RESERVA_FETCHING)
const reservaError = createAction(RESERVA_ERROR)
const reservaSuccess = createAction(RESERVA_SUCCESS)

axios.defaults.baseURL = 'http://localhost:3001'

export const getReservas = id => ({
  type: [reservaFetching, reservaSuccess, reservaError],
  payload: {
    data: () => axios.get(`/reservas/${id}`)
  }
})
