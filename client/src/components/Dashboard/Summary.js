import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Summary extends Component {
  render() {
    let name = '';
    let completed = '';
    let attempted = '';
    let percentage = '0';
    let track = '';
    console.log('Summary info', this.props.summary)
    console.log('Auth info', this.props.auth)
    if (this.props.summary && this.props.auth) {
      name = this.props.auth.name
      completed = this.props.summary[0].completed
      attempted = this.props.summary[1].attempted
      percentage = this.props.summary[3].percentage
      track = this.props.summary[2][0]
    }
    if (attempted !== 0) {
      return (
        <div className="row" style={{ paddingTop: '70px' }}>
          <div className="dashboardSummary col s8 offset-s2 center-align" style={{ }}>
            <h4 className="summaryHeader">{`What's up, ${name}?`}</h4>
            <h4 className="summaryText">{`You've completed ${completed} out of ${attempted} tasks`}</h4>
            <h4 className="summaryText">{`You've completed ${percentage}% of your tasks!`}</h4>
            <h4 className="summaryTrack">{`You're on the ${track} track`}</h4>
            <h4 className="summaryText">{`Ready for today's task?`}</h4>

            <Link to="/tasks/new" style={{ textDecoration: 'none', color: 'white' }}>
              <button className="startTask" type="button">
                {"Let's Go!"}
              </button>
            </Link>
          </div>
        </div>
      )
    }
    else if (this.props.summary == null) {
      return (
        <div className="row" style={{ paddingTop: '70px' }}>
        <div className="dashboardSummary col s8 offset-s2 center-align" style={{ }}>
        <h4 className="summaryHeader">{`You don't have a profile set up yet!`}</h4>
        <h4 className="summaryText">{`You haven't started any tasks yet!`}</h4>
        <h4 className="summaryTrack">{`You're on the ${track} track`}</h4>
        <h4 className="summaryText">{`Ready for your first task?`}</h4>

        <Link to="/tasks/new" style={{ textDecoration: 'none', color: 'white' }}>
        <button className="startTask" type="button">
        {"Let's Go!"}
        </button>
        </Link>
        </div>
        </div>
      )
    }
    else {
      return (
        <div className="row" style={{ paddingTop: '70px' }}>
          <div className="dashboardSummary col s8 offset-s2 center-align" style={{ }}>
            <h4 className="summaryHeader">{`What's up, ${name}?`}</h4>
            <h4 className="summaryText">{`You haven't started any tasks yet!`}</h4>
            <h4 className="summaryTrack">{`You're on the ${track} track`}</h4>
            <h4 className="summaryText">{`Ready for your first task?`}</h4>

            <Link to="/tasks/new" style={{ textDecoration: 'none', color: 'white' }}>
              <button className="startTask" type="button">
                {"Let's Go!"}
              </button>
            </Link>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    summary: state.summary
  }
}

export default connect(mapStateToProps, actions)(Summary);
