import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Field name="phone" type="text" component={renderField} label="Phone Number" />

        <div>
          <button type="button" className="previous btn" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next btn">
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardFormSecondPage)
