import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

class WizardFormFirstPage extends Component {
  renderFields() {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    return days.map(day => {
      return (
        <div key={day} style={{ paddingTop: '5px', paddingBottom: '5px' }}>
          <Field
            name={day}
            id={day}
            component="input"
            type="checkbox"
            className="wizardSelectButton"
            key={day}
          />
          <label className="labelText" htmlFor={day}>{day}</label>
        </div>
      )
    })
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container col s8 offset-s2 wizardFormPage" style={{ marginBottom: '20px' }}>
        <h4 className="center-align formTitle">What days do you <br/> want to get a task?</h4>
        <form onSubmit={handleSubmit}>
          <div style={{ width: '25%', margin: '0 auto', float: 'none', textTransform: 'capitalize', textAlign: 'left' }}>
            {this.renderFields()}
          </div>
          <div>
            <button type="submit" className="next wizardContinueButton">
              Next
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  initialValues: { monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false},
  validate
})(WizardFormFirstPage)
