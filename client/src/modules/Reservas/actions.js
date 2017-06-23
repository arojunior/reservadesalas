import axios from '../services'
import {createAction} from 'redux-actions'
import dateFormat from 'dateformat'

export const RESERVA_FETCHING = 'modules/Reservas/FETCHING'
export const RESERVA_SUCCESS = 'modules/Reservas/SUCCESS'
export const RESERVA_ERROR = 'modules/Reservas/ERROR'
export const RESERVA_SELECT = 'modules/Reservas/SELECT'

const reservaFetching = createAction(RESERVA_FETCHING)
const reservaError = createAction(RESERVA_ERROR)
const reservaSuccess = createAction(RESERVA_SUCCESS)
export const reservaSelect = createAction(RESERVA_SELECT)

export const normalizeDatetime = values =>
  values.map(value => ({
    ...value,
    data_inicio: dateFormat(value.data_inicio, 'dd/mm/yyyy hh:MM:ss'),
    data_fim: dateFormat(value.data_fim, 'dd/mm/yyyy hh:MM:ss')
  }))

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
