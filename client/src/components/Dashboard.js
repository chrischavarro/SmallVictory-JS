import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {
  componentWillMount() {
      this.props.fetchSummary();
  }

  renderOverview() {
    const {name} = this.props.auth
    if (this.props.summary) {
      const completed = this.props.summary[0].completed.length
      const attempted = this.props.summary[1].attempted.length
      const percentage = this.props.summary[3]
      const track = this.props.summary[2][0]
      console.log(this.props.summary)
      // console.log(this.props.summary)
// EXTRAPOLATE THIS INTO ITS OWN COMPONENT
      return (
        <div className="row">
        <div className="col s6 offset-s3 center-align" style={{ }}>
        <h4>Whats up, {name}?</h4>
        <h4>Youre currently on a x day streak</h4>
        <h4>Youve completed {completed} out of {attempted} victories</h4>
        <h4>Youve completed {percentage}% of your victories!</h4>
        <h4>Youre on the {track} track</h4>
        <h4>Ready for todays task?</h4>
        </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="container">
        <h2 className="center-align">
          Dashboard
        </h2>
        {this.renderOverview()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    summary: state.summary
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
