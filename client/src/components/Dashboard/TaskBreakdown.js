import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2'
import * as actions from '../../actions';

class TaskBreakdown extends Component {
  componentWillMount() {

  }

  render() {
    var week = 'week'
    var month = '30'
    return (
      <div className="row">
        <div className="col s6 offset-s3 center-align" style={{ }}>
          <h2>{"Here's the breakdown of the tasks you've gotten"}</h2>
          <button className="btn" onClick={() => this.props.fetchChartData(week)}>This Week</button>
          <button className="btn" onClick={() => this.props.fetchChartData(month)}>This Month</button>
          <button className="btn" onClick={() => this.props.fetchChartData()}>All Time</button>
          <Doughnut
            width={200}
            data={this.props.breakdownData}
          />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(TaskBreakdown)
