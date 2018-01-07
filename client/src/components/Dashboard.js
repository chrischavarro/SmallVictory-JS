import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Summary from './Dashboard/Summary'
import TaskBreakdown from './Dashboard/TaskBreakdown';
import CompletionRatio from './Dashboard/CompletionRatio';
import VictoryTotal from './Dashboard/VictoryTotal';

class Dashboard extends Component {
  componentWillMount() {
      this.props.fetchSummary();
      this.props.fetchChartData();
      this.props.fetchRadarData();
      this.props.fetchVictoryData();
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
    // console.log('CHART DATA', this.props.chartData)
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
    return (
      <TaskBreakdown
        breakdownData={data}
      />
    )
  }

  renderCompletionRatio() {
    // console.log('RADAR DATA', this.props.radarData)
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
    return (
      <CompletionRatio
        radarData={radarData}
      />
    )
  }

  renderVictoryTotal() {
    console.log('VICTORY DATA', this.props.victoryData)
    var victoryLabels = '';
    var victoryGraphData = ''
    if (this.props.victoryData) {
      const { victoryData } = this.props
      var victoryLabels = Object.keys(victoryData)
      var victoryGraphData = Object.values(victoryData)
      // console.log('VICTORY LABELS', victoryLabels)
      // console.log('VICTORY DATA', victoryGraphData)
    }

    var victoryGraphData = {
      labels: victoryLabels,
      datasets: [{
        data: victoryGraphData,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB']
      }]
    }

    return (
      <VictoryTotal
        victoryData={victoryGraphData}
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
        {this.renderVictoryTotal()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    summary: state.summary,
    chartData: state.chartData,
    radarData: state.radarData,
    victoryData: state.victoryData
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
