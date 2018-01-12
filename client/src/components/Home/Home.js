import React, { Component } from 'react';
import Smiley from './Smiley';
import HomeText from './HomeText';
import WizardForm from '../Forms/WizardForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../actions';

class Home extends Component {

  // componentWillMount() {
  //   this.props.fetchUser();
  // }

  handleSubmit(values) {
    const { history } = this.props

    this.props.createProfile(values, history);
  }

  renderPage() {
    const { history } = this.props
// console.log(this.props.auth)
     if (this.props.auth && !this.props.auth.profile) {
          return (
            <div>
              <WizardForm onSubmit={(values) => this.handleSubmit(values, history)} />
            </div>
          )
      }
      else {
        return (
          <div className="homeDiv" style={{ marginTop: '13%', textAlign: 'center', color: '#7d7d7d' }}>
            <Smiley />
            <HomeText />
            <span style={{ fontWeight: '400!important', fontSize: '26px', lineHeight: '1.1' }}>
              Do one 5 minute task that <br/> makes you <span style={{ textDecoration: 'underline' }}>better.</span>
            </span>
            <div style={{ marginTop: '20px' }}>
              <a href="/auth/google"><button className="startTask homeButton">Get Started</button></a>
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
