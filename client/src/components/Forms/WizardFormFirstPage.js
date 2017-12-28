// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
// import validate from './validate'
// import renderField from './renderField'
//
// const WizardFormFirstPage = props => {
//   const { handleSubmit } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <Field
//         name="firstName"
//         type="text"
//         component={renderField}
//         label="First Name"
//       />
//       <Field
//         name="lastName"
//         type="text"
//         component={renderField}
//         label="Last Name"
//       />
//       <div>
//         <button type="submit" className="next">
//           Next
//         </button>
//       </div>
//     </form>
//   )
// }
//
// export default reduxForm({
//   form: 'wizard', // <------ same form name
//   destroyOnUnmount: false, // <------ preserve form data
//   forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
//   validate
// })(WizardFormFirstPage)

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
// const { DOM: { input, select, textarea }} = React
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
          <input type="checkbox" className="filled-in" id="filled-in-box" name={day} key={day}  />
          <label for="filled-in-box">{day}</label>
        </div>

      )
    })
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
        <p>
          <input type="checkbox" className="filled-in" id="filled-in-box"  />
          <label for="filled-in-box">Filled in</label>
        </p>
        <p>
          <input type="checkbox" className="filled-in" id="filled-in-box"  />
          <label for="filled-in-box">Filled in</label>
        </p>
        <p>
          <input type="checkbox" className="filled-in" id="filled-in-box"  />
          <label for="filled-in-box">Filled in</label>
        </p>
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
