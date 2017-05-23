import React from 'react'
import {Field, reduxForm} from 'redux-form'

const Form = props => {
  const {handleSubmit, salas, locais, pristine, reset, submitting} = props

  const salasOptions = salas.map(sala => (
    <option key={sala.id} value={sala.id}>{sala.nome}</option>
  ))

  const locaisOptions = locais.map(local => (
    <option key={local.id} value={local.id}>{local.nome}</option>
  ))

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <div className="form-group">
        <label className="col-md-2">Local/Filial</label>
        <div className="col-md-10">
          <Field name="local" component="select" className="form-control">
            {locaisOptions}
          </Field>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2">Sala</label>
        <div className="col-md-10">
          <Field name="sala" component="select" className="form-control">
            {salasOptions}
          </Field>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2">Data início</label>
        <div className="col-md-5">
          <Field
            type="text"
            name="data_inicio"
            component="input"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2">Data fim</label>
        <div className="col-md-5">
          <Field
            type="text"
            name="data_fim"
            component="input"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2">Responsável</label>
        <div className="col-md-10">
          <Field
            name="responsavel"
            component="input"
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2">Café</label>
        <div className="col-md-10">
          <Field name="cafe" component="input" type="checkbox" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2">Descrição</label>
        <div className="col-md-10">
          <Field
            name="descricao"
            component="textarea"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-offset-2 col-md-10">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={pristine || submitting}>
            Enviar
          </button>{' '}
          <button
            type="button"
            className="btn btn-default"
            disabled={pristine || submitting}
            onClick={reset}>
            Limpar
          </button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'formReservas'
})(Form)
