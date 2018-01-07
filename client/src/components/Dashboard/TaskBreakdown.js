import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2'
import * as actions from '../../actions';

class TaskBreakdown extends Component {
  componentWillMount() {

  }
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
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB']
      }]
    }
    console.log(data)
    var week = '7'
    var month = '30'
    var all_time = '9999'
    return (
      <div className="row">
        <div className="col s6 offset-s3 center-align" style={{ }}>
          <h2>{"Here's the breakdown of the tasks you've gotten"}</h2>
          <button className="btn" onClick={() => this.props.fetchChartData(week)}>This Week</button>
          <button className="btn" onClick={() => this.props.fetchChartData(month)}>This Month</button>
          <button className="btn" onClick={() => this.props.fetchChartData(all_time)}>All Time</button>
          <Doughnut
            width={200}
            data={data}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    chartData: state.chartData
  }
}

export default connect(mapStateToProps, actions)(TaskBreakdown)
