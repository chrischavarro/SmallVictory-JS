import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'
import { fetchTags } from '../../actions';
import { connect } from 'react-redux';

class WizardForm extends Component {
  componentDidMount() {
      this.props.fetchTags();
  }

  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div className="container col s12 center-align">
        <span className="greetingText" style={{ marginTop: '150px' }}>{`Hey ${this.props.auth.name}! Let's get started.`}</span>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
            tags={this.props.tags}
          />
        )}
      </div>
    )
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
