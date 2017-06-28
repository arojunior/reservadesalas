import Layout from '../layouts'

import Home from './Home'
import Login from './Login'
import Users from './Users/routes'
import Reservation, {
  AddReservation,
  EditReservation
} from './Reservation/routes'

export default [
  {
    path: '/',
    component: Login
  },
  {
    path: '/home',
    component: Layout,
    indexRoute: Home,
    childRoutes: [Reservation, AddReservation, EditReservation, Users]
  }
]
