import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HorizontalBar } from 'react-chartjs-2'
import * as actions from '../../actions';

class TaskBreakdown extends Component {
  render() {
    // console.log(this.props.repData)
    const labelArray = []
    const dataArray = []
    if (this.props.repData) {
      const { repData } = this.props
      Object.keys(repData).forEach((type) => {
        labelArray.push(type)
      })
      Object.values(repData).forEach((type) => {
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
    // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB']

    var week = '7'
    var month = '30'
    var all_time = '9999'
    return (
      <div className="row">
        <div className="completionChart col s8 offset-s2 center-align" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
          <h2 className="chartBreakdown">{"Here's how many reps you've completed"}</h2>
          <div className="col s10 offset-s1" style={{ paddingBottom: '15px' }}>
            <button className="updateChart" onClick={() => this.props.fetchRepData(week)}>This Week</button>
            <button className="updateChart" onClick={() => this.props.fetchRepData(month)}>This Month</button>
            <button className="updateChart" onClick={() => this.props.fetchRepData(all_time)}>All Time</button>
          </div>
          <HorizontalBar
            width={200}
            data={data}
            options={{
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  ticks: {
                    beginAtZero: true,
                    stepSize: 20
                  }
                }]
              }
            }}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ repData }) {
  return { repData }
};

export default connect(mapStateToProps, actions)(TaskBreakdown)
