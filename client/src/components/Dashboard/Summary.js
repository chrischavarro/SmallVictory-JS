import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router'

class Summary extends Component {

  fetchTask() {
      const { history } = this.props
      this.props.fetchTask(history)
  }

  render() {
    const { name, completed, attempted, percentage, track } = this.props;
    return (
      <div className="row">
        <div className="col s6 offset-s3 center-align" style={{ }}>
        <h4>Whats up, {name}?</h4>
        <h4>Youre currently on a x day streak</h4>
        <h4>Youve completed {completed} out of {attempted} victories</h4>
        <h4>Youve completed {percentage}% of your victories!</h4>
        <h4>Youre on the {track} track</h4>
        <h4>Ready for todays task?</h4>
        <button className="btn-large" onClick={() => this.fetchTask()}>
          Lets Go!
        </button>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Summary);
