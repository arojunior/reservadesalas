import {handleActions} from 'redux-actions'

import {IS_FETCHING, FETCH_SUCCESS, FETCH_ERROR} from './actions'

const initialState = {
  error: false,
  data: null,
  isFetching: false
}

const reducer = handleActions(
  {
    [IS_FETCHING]: (state, action) => ({
      ...state,
      isFetching: true
    }),
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      isFetching: false
    }),
    [FETCH_ERROR]: (state, action) => ({
      ...state,
      error: true,
      data: action.payload.error
    })
  },
  initialState
)

export default reducer
