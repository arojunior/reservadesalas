import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import renderField, {required} from 'redux-form-field-wrapper'
import normalizeDatetime from './Normalize'

const fieldConfig = {
  divClass: 'form-group',
  inputClass: 'col-md-8',
  labelClass: 'col-md-2 control-label',
  className: 'form-control',
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

    const salasOptions = salas.map(sala => ({
      name: sala.nome,
      value: sala.nome
    }))
    salasOptions.unshift({name: ''})

    const locaisOptions = locais.map(local => ({
      name: local.nome,
      value: local.nome
    }))
    locaisOptions.unshift({name: ''})

    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <Field type="hidden" name="_id" component="input" />
        <Field
          {...fieldConfig}
          name="local"
          label="Local/Filial"
          type="select"
          selectOptions={locaisOptions}
          validate={required}
        />
        <Field
          {...fieldConfig}
          name="sala"
          label="Sala"
          validate={required}
          type="select"
          selectOptions={salasOptions}
        />
        <Field
          {...fieldConfig}
          type="text"
          name="data_inicio"
          inputClass="col-md-5"
          label="Data início"
          validate={required}
          normalize={normalizeDatetime}
        />
        <Field
          {...fieldConfig}
          type="text"
          name="data_fim"
          inputClass="col-md-5"
          label="Data fim"
          validate={required}
          normalize={normalizeDatetime}
        />
        <Field
          {...fieldConfig}
          type="text"
          name="responsavel"
          label="Responsável"
          validate={required}
        />
        <Field
          {...fieldConfig}
          name="cafe"
          label="Café"
          type="checkbox"
          className=""
          onChange={() => this.setCafe(this.state.cafeIsChecked)}
        />

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

export default reduxForm({
  form: 'formReservas'
})(Form)
