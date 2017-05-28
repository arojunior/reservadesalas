import Layout from '../layouts'

import Home from './Home'
import Login from './Login'
import Reservas, {AddReserva, EditReserva} from './Reservas/routes'

export default [
  {
    path: '/',
    component: Login
  },
  {
    path: '/home',
    component: Layout,
    indexRoute: Home,
    childRoutes: [Reservas, AddReserva, EditReserva]
  }
]
