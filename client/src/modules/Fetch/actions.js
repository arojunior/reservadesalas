import {createAction} from 'redux-actions'

export const IS_FETCHING = 'modules/Fetch/IS_FETCHING'
export const FETCH_SUCCESS = 'modules/Fetch/SUCCESS'
export const FETCH_ERROR = 'modules/Fetch/ERROR'

export const isFetching = createAction(IS_FETCHING)
export const fetchError = createAction(FETCH_ERROR)
export const fetchSuccess = createAction(FETCH_SUCCESS)
