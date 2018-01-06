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
          Task Breakdown
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
