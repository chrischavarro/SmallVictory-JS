import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <div className="container col s8 offset-s2 wizardFormPage" style={{ }}>
      <form onSubmit={handleSubmit} style={{ width: '70%', margin: '0 auto' }}>
        <span className="formTitle">{"What's your phone number?"}<br/>(xxx-xxx-xxxx)</span>
        <Field name="phone" type="text" component={renderField} />
        <span className="formTitle">What time do you <br/> usually wake up?</span>
        <Field name="time" type="time" component={renderField} />

        <div>
          <button type="button" className="previous wizardContinueButton" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next wizardContinueButton">
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
