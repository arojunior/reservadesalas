import React from 'react'
import {Row, Col} from 'react-bootstrap'

const Home = () => {
  return (
    <Row>
      <Col md={4} mdOffset={4}>
        <h3>Room reservation</h3>
      </Col>
    </Row>
  )
}

export default {
  component: Home
}
