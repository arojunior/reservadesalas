export default {
  path: '/usuarios',

  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./index').default)
    })
  }
}
