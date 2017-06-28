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
      rooms,
      places,
      pristine,
      reset,
      submitting
    } = this.props

    const roomsOptions = rooms.map(room => ({
      name: room.name,
      value: room.name
    }))
    roomsOptions.unshift({name: ''})

    const placesOptions = places.map(place => ({
      name: place.name,
      value: place.name
    }))
    placesOptions.unshift({name: ''})

    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <Field type="hidden" name="_id" component="input" />
        <Field
          {...fieldConfig}
          name="place"
          label="Place"
          type="select"
          selectOptions={placesOptions}
          validate={required}
        />
        <Field
          {...fieldConfig}
          name="room"
          label="Room"
          validate={required}
          type="select"
          selectOptions={roomsOptions}
        />
        <Field
          {...fieldConfig}
          type="text"
          name="date_start"
          inputClass="col-md-5"
          label="Start date"
          validate={required}
          normalize={normalizeDatetime}
        />
        <Field
          {...fieldConfig}
          type="text"
          name="date_end"
          inputClass="col-md-5"
          label="End date"
          validate={required}
          normalize={normalizeDatetime}
        />
        <Field
          {...fieldConfig}
          type="text"
          name="owner"
          label="Sponsor"
          validate={required}
        />
        <Field
          {...fieldConfig}
          name="coffee"
          label="Coffee"
          type="checkbox"
          className=""
          onChange={() => this.setCafe(this.state.cafeIsChecked)}
        />

        {this.state.cafeIsChecked &&
          <Field
            {...fieldConfig}
            type="text"
            name="people"
            label="People number"
            inputClass="col-md-2"
            validate={required}
          />}

        <Field
          {...fieldConfig}
          type="textarea"
          name="description"
          label="Description"
        />

        <div className="form-group">
          <div className="col-md-offset-2 col-md-10">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={pristine || submitting}>
              Save
            </button>{' '}
            <button
              type="button"
              className="btn btn-default"
              disabled={pristine || submitting}
              onClick={reset}>
              Clear
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'formReservation'
})(Form)
