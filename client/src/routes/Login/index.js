import React, {Component} from 'react'
import {browserHistory} from 'react-router'

import Form from './components/Form'

const style = {
  'margin-top': '10px'
}

class Login extends Component {
  handleSubmit = () => browserHistory.push('/home')
  render() {
    return (
      <div className="container" style={style}>
        <div className="col-md-8 col-md-offset-2">
          <div className="jumbotron">
            <div className="row text-center">
              <h2>Faça login aqui</h2>
            </div>
            <div className="row">
              <div className="col-md-10">
                <Form onSubmit={this.handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
