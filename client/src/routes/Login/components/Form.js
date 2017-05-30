import React from 'react'
import {Field, reduxForm} from 'redux-form'
import renderField, {required} from 'redux-form-field-wrapper'

const fieldConfig = {
  divClass: 'form-group',
  inputClass: 'col-md-8',
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
        {...defaultConfig}
      />
      <Field
        type="password"
        name="password"
        placeholder="Senha"
        label="Senha"
        validate={required}
        {...defaultConfig}
      />
      <div className="col-md-6 col-md-offset-2">
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={pristine || submitting}>
            Enviar
          </button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'formLogin'
})(Form)
