import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Summary from './Dashboard/Summary'
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
// EXTRAPOLATE THIS INTO ITS OWN COMPONENT
      return (
          <Summary
            name={name}
            completed={completed}
            attempted={attempted}
            track={track}
            percentage={percentage}
          />
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
