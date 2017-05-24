import {handleActions} from 'redux-actions'

import {RESERVA_FETCHING, RESERVA_SUCCESS, RESERVA_ERROR} from './actions'

const initialState = {
  fetching: false,
  data: null
}

const reducer = handleActions(
  {
    [RESERVA_FETCHING]: (state, action) => ({
      ...state,
      fetching: true
    }),

    [RESERVA_SUCCESS]: (state, action) => ({
      ...state,
      fetching: false,
      data: action.payload.data
    }),

    [RESERVA_ERROR]: (state, action) => ({
      ...state,
      fetching: false
    })
  },
  initialState
)

export default reducer
