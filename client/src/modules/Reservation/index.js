import {handleActions} from 'redux-actions'
import {normalizeDatetime} from './actions'

import {
  RESERVATION_FETCHING,
  RESERVATION_SUCCESS,
  RESERVATION_ERROR,
  RESERVATION_SELECT
} from './actions'

const initialState = {
  fetching: false,
  data: null,
  selected: null
}

const reducer = handleActions(
  {
    [RESERVATION_FETCHING]: (state, action) => ({
      ...state,
      fetching: true
    }),

    [RESERVATION_SUCCESS]: (state, action) => ({
      ...state,
      fetching: false,
      data: normalizeDatetime(action.payload.data)
    }),

    [RESERVATION_ERROR]: (state, action) => ({
      ...state,
      fetching: false
    }),

    [RESERVATION_SELECT]: (state, action) => ({
      ...state,
      fetching: false,
      selected: action.payload
    })
  },
  initialState
)

export default reducer
