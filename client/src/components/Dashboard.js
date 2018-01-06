import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Summary from './Dashboard/Summary'
import TaskBreakdown from './Dashboard/TaskBreakdown';

class Dashboard extends Component {
  componentWillMount() {
      this.props.fetchSummary();
      this.props.fetchChartData();
  }

  renderOverview() {
    const {name} = this.props.auth
    if (this.props.summary) {
      const completed = this.props.summary[0].completed
      const attempted = this.props.summary[1].attempted
      const percentage = this.props.summary[3]
      const track = this.props.summary[2][0]
      console.log(this.props.summary)
      return (
          <Summary
            name={name}
            completed={completed}
            attempted={attempted}
            track={track}
            percentage={percentage}
          />
      )
    }
  }

  renderBreakdown() {
    console.log(this.props.chartData)
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
      // console.log('LABEL ARRAY', labelArray)
      // console.log('DATA ARRAY', dataArray)
    }
    const data = {
      labels: labelArray,
      datasets: [{
        data: dataArray,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB']
      }]
    }
    return (
      <TaskBreakdown
        breakdownData={data}
      />
    )
  }

  render() {
    return (
      <div className="container">
        <h2 className="center-align">
          Dashboard
        </h2>
        {this.renderOverview()}
        {this.renderBreakdown()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    summary: state.summary,
    chartData: state.chartData
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
