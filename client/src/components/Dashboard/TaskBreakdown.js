import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2'
import * as actions from '../../actions';

class TaskBreakdown extends Component {
  render() {
    const labelArray = []
    const dataArray = []
    if (this.props.chartData) {
      const { chartData } = this.props
      Object.keys(chartData).forEach((type) => {
        labelArray.push(type)
      })
      Object.values(chartData).forEach((type) => {
        dataArray.push(type)
      })
    }
    var data = {
      labels: labelArray,
      datasets: [{
        data: dataArray,
        backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(38, 166, 154, 0.8)",
        "rgba(12, 52, 251, 0.8)", "rgba(96, 55, 169, 0.8)", "rgba(255, 132, 8, 0.8)", "rgba(216,255,80, 0.8)", "rgba(92,0,0, 0.8)"],
        hoverBackgroundColor: ["rgba(255, 99, 132, 0.7)", "rgba(54, 162, 235, 0.7)", "rgba(255, 206, 86, 0.7)", "rgba(38, 166, 154, 0.7)",
        "rgba(12, 52, 251, 0.7)", "rgba(96, 55, 169, 0.7)", "rgba(255, 132, 8, 0.7)", "rgba(216,255,70, 0.7)", "rgba(92,0,0, 0.7)"]
      }]
    }
    // console.log(data)
    var week = '7'
    var month = '30'
    var all_time = '9999'
    return (
      <div className="row">
        <div className="completionChart col s8 offset-s2 center-align" style={{ }}>
          <h2 className="chartBreakdown">{"Here's the breakdown of the tasks you've gotten"}</h2>
          <div className="col s10 offset-s1" style={{ paddingBottom: '15px' }}>
            <button className="updateChart" onClick={() => this.props.fetchChartData(week)}>This Week</button>
            <button className="updateChart" onClick={() => this.props.fetchChartData(month)}>This Month</button>
            <button className="updateChart" onClick={() => this.props.fetchChartData(all_time)}>All Time</button>
          </div>
          <Doughnut
            width={200}
            data={data}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ chartData }) {
  return { chartData };
};

export default connect(mapStateToProps, actions)(TaskBreakdown)
