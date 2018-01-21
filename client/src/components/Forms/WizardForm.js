import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import WizardFormFirstPage from './WizardFormFirstPage'
// import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormFirstPage from './WizardFormFirstPage'
import { fetchTags } from '../../actions';
import { connect } from 'react-redux';

class WizardForm extends Component {
  componentDidMount() {
      this.props.fetchTags();
  }

  render() {
    const { onSubmit } = this.props
    if (this.props.tags) {
      return (
        <div className="container col s12 center-align">
          <span className="greetingText">{`Hey ${this.props.auth.name}! Let's get started.`}</span>
          <WizardFormFirstPage
          previousPage={this.previousPage}
          onSubmit={onSubmit}
          tags={this.props.tags}
          />
        </div>
      )

    } else {
      return (
        <div className="container col s12 center-align">
          <div className="col s8 offset-s2 wizardFormPage">
            <h4 className="center-align formTitle">What do you want <br/> to get better at?</h4>
            <h6 style={{ paddingBottom: '10px' }}>(Make sure to pick at least one fitness tag and the Fitness track for now!)</h6>
          </div>
        </div>
      )
    }
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    tags: state.tags,
    auth: state.auth
  };
};

export default connect(mapStateToProps, { fetchTags })(WizardForm);
