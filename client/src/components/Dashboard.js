import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Summary from './Dashboard/Summary'
import TaskBreakdown from './Dashboard/TaskBreakdown';
import CompletionRatio from './Dashboard/CompletionRatio';

class Dashboard extends Component {
  componentWillMount() {
      this.props.fetchSummary();
      this.props.fetchChartData();
      this.props.fetchRadarData();
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
    // console.log(this.props.chartData)
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
    var data = {
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

  renderCompletionRatio() {
    console.log('RADAR DATA', this.props.radarData)
    const attemptedLabelArray = []
    // const completedLabelArray = []
    const attemptedDataArray = []
    const completedDataArray = []
    if (this.props.radarData) {
      const { radarData } = this.props;
      Object.keys(radarData[0]).forEach((type) => {
        attemptedLabelArray.push(type)
      })
      // Object.keys(radarData[1]).forEach((type) => {
      //   completedLabelArray.push(type)
      // })
      Object.values(radarData[0]).forEach((type) => {
        attemptedDataArray.push(type)
      })
      Object.values(radarData[1]).forEach((type) => {
        completedDataArray.push(type)
      })
      console.log('TOTAL LABELS', attemptedLabelArray)
    }
    var radarData = {
      labels: attemptedLabelArray,
      datasets: [
        {
          label: 'Completed',
          data: completedDataArray,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB']
        },
        {
          label: 'Attempted',
          data: attemptedDataArray,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB']
        }
      ]
    }
    return (
      <CompletionRatio
        radarData={radarData}
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
        {this.renderCompletionRatio()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    summary: state.summary,
    chartData: state.chartData,
    radarData: state.radarData
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
