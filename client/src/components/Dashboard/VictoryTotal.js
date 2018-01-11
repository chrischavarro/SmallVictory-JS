import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2'
import * as actions from '../../actions';

class VictoryTotal extends Component {
  render() {
    var victoryLabels = '';
    var victoryGraphData = ''
    if (this.props.victoryData) {
      const { victoryData } = this.props
       victoryLabels = Object.keys(victoryData)
       victoryGraphData = Object.values(victoryData)
      // console.log('VICTORY LABELS', victoryLabels)
      // console.log('VICTORY DATA', victoryGraphData)
    }
     victoryGraphData = {
      labels: victoryLabels,
      datasets: [{
        data: victoryGraphData,
        backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(38, 166, 154, 0.8)",
        "rgba(12, 52, 251, 0.8)", "rgba(96, 55, 169, 0.8)", "rgba(255, 132, 8, 0.8)", "rgba(216,255,80, 0.8)", "rgba(92,0,0, 0.8)"],
        hoverBackgroundColor: ["rgba(255, 99, 132, 0.7)", "rgba(54, 162, 235, 0.7)", "rgba(255, 206, 86, 0.7)", "rgba(38, 166, 154, 0.7)",
        "rgba(12, 52, 251, 0.7)", "rgba(96, 55, 169, 0.7)", "rgba(255, 132, 8, 0.7)", "rgba(216,255,70, 0.7)", "rgba(92,0,0, 0.7)"]
      }]
    }
    var week = '7'
    var month = '30'
    var all_time = '9999'

    return (
      <div className="row">
        <div className="completionChart col s8 offset-s2 center-align" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
          <h2 className="chartBreakdown">{"Here's how your victories have added up"}</h2>
          <div className="col s10 offset-s1" style={{ paddingBottom: '15px' }}>
            <button className="updateChart" onClick={() => this.props.fetchVictoryData(week)}>This Week</button>
            <button className="updateChart" onClick={() => this.props.fetchVictoryData(month)}>This Month</button>
            <button className="updateChart" onClick={() => this.props.fetchVictoryData(all_time)}>All Time</button>
          </div>
          <Bar
            width={200}
            data={victoryGraphData}
            options={{
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    stepSize: 1
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

function mapStateToProps({ victoryData }) {
  return { victoryData }
};

export default connect(mapStateToProps, actions)(VictoryTotal)
