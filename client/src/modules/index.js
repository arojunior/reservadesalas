import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import fetchMiddleware from 'fetch-middleware'
import storeSynchronize from 'redux-localstore'

import Rooms from './Rooms'
import Places from './Places'
import Reservation from './Reservation'
import Login from './Login'

const combineReducer = combineReducers({
  form: formReducer,
  Rooms,
  Places,
  Reservation,
  Login
})

const store = createStore(
  combineReducer,
  {},
  compose(
    applyMiddleware(fetchMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

storeSynchronize(store)

export default store
