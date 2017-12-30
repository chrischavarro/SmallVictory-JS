import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  console.log('Test props!', this.props.test)
  return (
    <div className="container" style={{ paddingTop: '150px' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
        </div>
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)
