import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Radar } from 'react-chartjs-2'
import * as actions from '../../actions';

class CompletionRatio extends Component {
  render() {
    const attemptedLabelArray = []
    const attemptedDataArray = []
    const completedDataArray = []
    if (this.props.radarData) {
      const { radarData } = this.props;
      Object.keys(radarData[0]).forEach((type) => {
        attemptedLabelArray.push(type)
      })
      Object.values(radarData[0]).forEach((type) => {
        attemptedDataArray.push(type)
      })
      Object.values(radarData[1]).forEach((type) => {
        completedDataArray.push(type)
      })
    }
    var radarData = {
      labels: attemptedLabelArray,
      datasets: [
        {
          label: 'Completed',
          data: completedDataArray,
          // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB'],
          backgroundColor: ['#FF6384'],
          hoverBackgroundColor: ['#36A2EB']
        },
        {
          label: 'Attempted',
          data: attemptedDataArray,
          backgroundColor: ['#FFCE56'],
          hoverBackgroundColor: ['#E7E9ED']
        }
      ]
    }
    var week = '7'
    var month = '30'
    var all_time = '9999'
    // console.log(radarData)
    return (
      <div className="row">
        <div className="completionChart col s8 offset-s2 center-align" style={{ }}>
          <h2 className="chartBreakdown">{"Here's how you've done with your tasks"}</h2>
          <div className="col s10 offset-s1" style={{ paddingBottom: '15px' }}>
            <button className="updateChart" onClick={() => this.props.fetchRadarData(week)}>This Week</button>
            <button className="updateChart" onClick={() => this.props.fetchRadarData(month)}>This Month</button>
            <button className="updateChart" onClick={() => this.props.fetchRadarData(all_time)}>All Time</button>
          </div>
          <Radar
            width={200}
            data={radarData}
            options={
              {
              scale: {
                  ticks: {
                    beginAtZero: true,
                    stepSize: 1
                  }
              }
            }
          }
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    radarData: state.radarData
  }
}

export default connect(mapStateToProps, actions)(CompletionRatio)
