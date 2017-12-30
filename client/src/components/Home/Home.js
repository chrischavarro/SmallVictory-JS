import React, { Component } from 'react';
import Smiley from './Smiley';
import HomeText from './HomeText';
import Dashboard from '../Dashboard';
import WizardForm from '../Forms/WizardForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../actions';

class Home extends Component {

  componentWillMount() {
    this.props.fetchUser();
  }

  handleSubmit(values) {
    const { history } = this.props

    console.log('Submitted form', values)
    this.props.createProfile(values, history);
  }

  renderPage() {
    // console.log(this.props.auth)
    // console.log(this.props.form)
    const { history } = this.props

      if (this.props.auth && this.props.auth.profile) {
        return (
          <div>
            <Dashboard />
          </div>
        )
      }
      else if (this.props.auth && !this.props.auth.profile) {
          return (
            <div>
              <WizardForm onSubmit={(values) => this.handleSubmit(values, history)} />
            </div>
          )
      }
      else {
        return (
          <div style={{ marginTop: '15%', textAlign: 'center', color: '#7d7d7d' }}>
            <Smiley />
            <HomeText />
            <span style={{ fontWeight: '400!important', fontSize: '26px', lineHeight: '1.1' }}>
              Do one 5 minute task that <br/> makes you <span style={{ textDecoration: 'underline' }}>better.</span>
            </span>
            <div style={{ marginTop: '20px' }}>
              <a href="/auth/google" className="waves-effect waves-light btn-large" style={{ backgroundColor: '#3C78D8', fontSize: '25px' }}>Get Started</a>
              <span style={{ fontWeight: '400!important', fontSize: '26px', textDecoration: 'none' }}>
              </span>
            </div>
          </div>
        )
      }
  }

  render() {
    const { history } = this.props
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    form: state.form
  }
};

export default connect(mapStateToProps, actions)(Home);
