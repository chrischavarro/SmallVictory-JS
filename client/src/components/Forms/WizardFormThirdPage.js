import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'

// <input type="checkbox" className="filled-in" id={tag.name} name={tag.name} key={tag.name}  />
class WizardFormThirdPage extends Component {

  renderTags() {
    const tags = this.props.tags
    return tags.map(tag => {
      return (
        <div key={tag.name}>
          <Field name={`key-${tag.name}`} id={tag.name} component="input" type="checkbox" key={tag.name} />
          <label htmlFor={tag.name}>{tag.name}</label>
        </div>
      )
    })
  }
  // {this.renderTags()}
  render() {
    // console.log('Test props!', this.props.tags)
    const { handleSubmit, pristine, previousPage, submitting } = this.props
    return (
      <div className="container" style={{ paddingTop: '150px', marginBottom: '20px' }}>
        <h4 className="center-align">What do you want to get better at?</h4>
        <form onSubmit={handleSubmit}>

          {this.renderTags()}
          <div>
            <button type="button" className="previous btn" onClick={previousPage}>
              Previous
            </button>
            <button type="submit" className="btn" disabled={pristine || submitting}>
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
