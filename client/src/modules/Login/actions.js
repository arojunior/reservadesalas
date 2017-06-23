import axios from '../services'
import {createAction} from 'redux-actions'

export const LOGIN_FETCHING = 'modules/Login/FETCHING'
export const LOGIN_SUCCESS = 'modules/Login/SUCCESS'
export const LOGIN_ERROR = 'modules/Login/ERROR'

const loginFetching = createAction(LOGIN_FETCHING)
const loginError = createAction(LOGIN_ERROR)
const loginSuccess = createAction(LOGIN_SUCCESS)

export const sendLogin = values => ({
  type: [loginFetching, loginSuccess, loginError],
  payload: {
    data: () => axios.post('/login', values)
  }
})
