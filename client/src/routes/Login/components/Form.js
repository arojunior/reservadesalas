import React from 'react'
import {Field, reduxForm} from 'redux-form'
import renderField, {required} from 'redux-form-field-wrapper'
import {Col, Button, FormGroup} from 'react-bootstrap'

const fieldConfig = {
  divClass: 'form-group',
  inputClass: 'col-md-10',
  labelClass: 'col-md-2 control-label',
  className: 'form-control',
  component: renderField
}

const Form = props => {
  const {handleSubmit, pristine, submitting} = props
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <Field
        type="text"
        name="email"
        placeholder="E-mail"
        label="E-mail"
        validate={required}
        {...fieldConfig}
      />
      <Field
        type="password"
        name="senha"
        placeholder="Password"
        label="Password"
        validate={required}
        {...fieldConfig}
      />
      <Col md={6} mdOffset={2}>
        <FormGroup>
          <Button
            type="submit"
            bsStyle="primary"
            disabled={pristine || submitting}>
            Send
          </Button>
        </FormGroup>
      </Col>
    </form>
  )
}

export default reduxForm({
  form: 'formLogin'
})(Form)
