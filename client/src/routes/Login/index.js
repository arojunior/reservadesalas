import React from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps} from 'recompose'

import Form from './components/Form'
import {sendLogin} from '../../modules/Login/actions'

const styles = {
  container: {
    marginTop: '40px'
  }
}

const Login = ({handleSubmit, styles}) =>
  <div className="container" style={styles.container}>
    <div className="col-md-8 col-md-offset-2">
      <div className="jumbotron">
        <div className="row text-center">
          <h2>Faça login aqui</h2>
        </div>
        <div className="row">
          <div className="col-md-10">
            <Form onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  </div>

export default compose(
  connect(state => state.Login),
  withProps({
    styles
  }),
  withHandlers({
    handleSubmit: props => values =>
      props.dispatch(sendLogin(values)).then(() => browserHistory.push('/home'))
  })
)(Login)
