const Reservas = {
  path: '/reservas',

  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./index').default)
    })
  }
}
export const ReservaNova = {
  path: '/reservas/nova',

  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./containers/Nova').default)
    })
  }
}

export default Reservas
