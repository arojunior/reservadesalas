import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import fetchMiddleware from 'fetch-middleware'

import Salas from './Salas'
import Locais from './Locais'
import Reservas from './Reservas'

const combineReducer = combineReducers({
  form: formReducer,
  Salas,
  Locais
})

export const store = createStore(
  combineReducer,
  {},
  compose(
    applyMiddleware(fetchMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
