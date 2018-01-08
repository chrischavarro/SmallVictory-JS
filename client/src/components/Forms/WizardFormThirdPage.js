import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'

// <input type="checkbox" className="filled-in" id={tag.name} name={tag.name} key={tag.name}  />
class WizardFormThirdPage extends Component {

  renderTags() {
    const tags = this.props.tags
    return tags.map(tag => {
      return (
        <div key={tag.name} style={{ paddingTop: '5px', paddingBottom: '5px' }}>
          <Field name={`key-${tag._id}`} id={tag.name} component="input" type="checkbox" key={tag.name} />
          <label className="labelText" htmlFor={tag.name}>{tag.name}</label>
        </div>
      )
    })
  }
  // {this.renderTags()}
  render() {
    // console.log('Test props!', this.props.tags)
    const { handleSubmit, pristine, previousPage, submitting } = this.props
    return (
      <div className="container col s8 offset-s2 wizardFormPage" style={{ marginBottom: '20px' }}>
        <h4 className="center-align formTitle">What do you want <br/> to get better at?</h4>
        <form onSubmit={handleSubmit}>
          <div style={{ width: '25%', margin: '0 auto', float: 'none', textTransform: 'capitalize', textAlign: 'left' }}>
            {this.renderTags()}
          </div>
          <div>
            <button type="button" className="previous wizardContinueButton" onClick={previousPage}>
              Previous
            </button>
            <button type="submit" className="wizardContinueButton" disabled={pristine || submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
//
// const WizardFormThirdPage = props => {
//   const { handleSubmit, pristine, previousPage, submitting } = props
//   console.log('Test props!', this.props.test)
//   return (
//     <div className="container" style={{ paddingTop: '150px' }}>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Notes</label>
//           <div>
//             <Field name="notes" component="textarea" placeholder="Notes" />
//           </div>
//         </div>
//         <div>
//           <button type="button" className="previous" onClick={previousPage}>
//             Previous
//           </button>
//           <button type="submit" disabled={pristine || submitting}>
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)
