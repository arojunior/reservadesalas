import React from 'react'
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap'

import Form from './components/Form'

export default ({handleSubmit, styles}) =>
  <Grid style={styles.container}>
    <Col md={8} mdOffset={2}>
      <Jumbotron>
        <Row bsClass="text-center">
          <h2>Login</h2>
        </Row>
        <Row>
          <Col md={10}>
            <Form onSubmit={handleSubmit} />
          </Col>
        </Row>
      </Jumbotron>
    </Col>
  </Grid>
