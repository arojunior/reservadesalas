const Reservas = {
  path: '/reservas',

  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./index').default)
    })
  }
}
export const AddReserva = {
  path: '/reservas/nova',

  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./containers/AddReserva').default)
    })
  }
}
export const EditReserva = {
  path: '/reservas/editar',

  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./containers/EditReserva').default)
    })
  }
}
export default Reservas
