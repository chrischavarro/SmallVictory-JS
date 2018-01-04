import React, { Component } from 'react';

class Summary extends Component {
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
        </div>
      </div>
    )
  }
}

export default Summary;
