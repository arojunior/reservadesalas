import {handleActions} from 'redux-actions'
import {defineState} from 'redux-localstore'

import {LOGIN_SUCCESS, LOGIN_FETCHING, LOGIN_ERROR} from './actions'

const defaultState = {
  data: null,
  msg: null,
  isLogged: false
}

const initialState = defineState(defaultState)('Login')

const reducer = handleActions(
  {
    [LOGIN_FETCHING]: (state, action) => state,
    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload.data,
      isLogged: true
    }),

    [LOGIN_ERROR]: (state, action) => ({
      ...state,
      msg: action.payload.error
    })
  },
  initialState
)

export default reducer
