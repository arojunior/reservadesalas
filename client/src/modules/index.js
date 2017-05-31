import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import fetchMiddleware from 'fetch-middleware'
import storeSynchronize from 'redux-localstore'

import Salas from './Salas'
import Locais from './Locais'
import Reservas from './Reservas'
import Login from './Login'

const combineReducer = combineReducers({
  form: formReducer,
  Salas,
  Locais,
  Reservas,
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
