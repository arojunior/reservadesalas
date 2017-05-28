import React from 'react'
import {Field, reduxForm} from 'redux-form'
import renderField from 'redux-form-field-wrapper'

import formConfig from '../../../components/FormConfig'

const defaultConfig = {
  ...formConfig,
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
        {...defaultConfig}
      />
      <Field
        type="password"
        name="password"
        placeholder="Senha"
        label="Senha"
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
