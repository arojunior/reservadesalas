const Reservation = {
  path: '/reservation',

  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./index').default)
    })
  }
}
export const AddReservation = {
  path: '/reservation/add',

  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./containers/AddReservation').default)
    })
  }
}
export const EditReservation = {
  path: '/reservation/edit',

  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./containers/EditReservation').default)
    })
  }
}
export default Reservation
