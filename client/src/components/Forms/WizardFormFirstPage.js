import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
// checked={true} className="btn" onChange={() => console.log('change')}
// <div>
// <input type="checkbox" key={day} name={day} value={day} id={day}  />{day}
//
// </div>
// <Field
// name={day}
// component={renderField}
// type="checkbox"
// label={day}
// key={day}
// className="filled-in"
// id="filled-in-box"
// />
class WizardFormFirstPage extends Component {
  renderFields() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return days.map(day => {
      return (
        <div key={day}>
          <input type="checkbox" className="filled-in" id={day} name={day} key={day}  />
          <label htmlFor={day}>{day}</label>
        </div>
      )
    })
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container" style={{ paddingTop: '150px', marginBottom: '20px' }}>
        <h4 className="center-align">What days do you want to get a task?</h4>
        <form onSubmit={handleSubmit}>
          {this.renderFields()}
          <div>
            <button type="submit" className="next btn">
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
  validate
})(WizardFormFirstPage)
