import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import renderField, {required} from 'redux-form-field-wrapper'

const fieldConfig = {
  divClass: 'form-group',
  inputClass: 'col-md-8',
  labelClass: 'col-md-2 control-label',
  component: renderField
}

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cafeIsChecked: props.initialValues.cafe
    }
  }

  setCafe = value => this.setState({cafeIsChecked: !value})

  render() {
    const {
      handleSubmit,
      salas,
      locais,
      pristine,
      reset,
      submitting
    } = this.props

    const salasOptions = salas.map(sala => (
      <option key={sala.id} value={sala.nome}>{sala.nome}</option>
    ))

    const locaisOptions = locais.map(local => (
      <option key={local.id} value={local.nome}>{local.nome}</option>
    ))

    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <Field type="hidden" name="_id" component="input" />
        <div className="form-group">
          <div className="col-md-2 control-label">
            <label>Local/Filial</label>
          </div>
          <div className="col-md-10">
            <Field
              name="local"
              component="select"
              className="form-control"
              validate={required}>
              <option>--Selecione a Filial--</option>
              {locaisOptions}
            </Field>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-2 control-label">
            <label>Sala</label>
          </div>
          <div className="col-md-10">
            <Field name="sala" component="select" className="form-control">
              <option>--Selecione a Sala--</option>
              {salasOptions}
            </Field>
          </div>
        </div>
        <Field
          {...fieldConfig}
          type="text"
          name="data_inicio"
          inputClass="col-md-5"
          label="Data início"
          validate={required}
        />
        <Field
          {...fieldConfig}
          type="text"
          name="data_fim"
          inputClass="col-md-5"
          label="Data fim"
          validate={required}
        />
        <Field
          {...fieldConfig}
          type="text"
          name="responsavel"
          label="Responsável"
          validate={required}
        />
        <div className="form-group">
          <div className="col-md-2 control-label">
            <label>Café</label>
          </div>
          <div className="col-md-10">
            <Field
              name="cafe"
              component="input"
              type="checkbox"
              onChange={() => this.setCafe(this.state.cafeIsChecked)}
            />
          </div>
        </div>

        {this.state.cafeIsChecked &&
          <Field
            {...fieldConfig}
            type="text"
            name="quantidade_pessoas"
            label="Qtd. pessoas"
            inputClass="col-md-2"
            validate={required}
          />}

        <Field
          {...fieldConfig}
          type="textarea"
          name="descricao"
          label="Descrição"
          validate={required}
        />

        <div className="form-group">
          <div className="col-md-offset-2 col-md-10">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={pristine || submitting}>
              Gravar
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
}

export default reduxForm({form: 'formReservas'})(Form)
