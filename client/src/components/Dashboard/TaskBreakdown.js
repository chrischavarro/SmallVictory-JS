import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2'

class TaskBreakdown extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3 center-align" style={{ }}>
          <h2>{"Here's the breakdown of the tasks you've gotten"}</h2>
          <Doughnut
            width={300}
            data={this.props.breakdownData}
          />
        </div>
      </div>
    )
  }
}

export default TaskBreakdown
