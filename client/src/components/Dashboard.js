import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Summary from './Dashboard/Summary'
import TaskBreakdown from './Dashboard/TaskBreakdown';
import CompletionRatio from './Dashboard/CompletionRatio';
import VictoryTotal from './Dashboard/VictoryTotal';

class Dashboard extends Component {
  componentWillMount() {
    var all_time = 9999
      this.props.fetchSummary();
      this.props.fetchChartData(all_time);
      this.props.fetchRadarData(all_time);
      this.props.fetchVictoryData(all_time);
  }

  renderOverview() {
    const {name} = this.props.auth
    if (this.props.summary) {
      const completed = this.props.summary[0].completed
      const attempted = this.props.summary[1].attempted
      const percentage = this.props.summary[3]
      const track = this.props.summary[2][0]
      // console.log(this.props.summary)
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
    return (
      <TaskBreakdown />
    )
  }

  renderCompletionRatio() {
    return (
      <CompletionRatio />
    )
  }

  renderVictoryTotal() {
    // console.log('VICTORY DATA', this.props.victoryData)
    // var victoryLabels = '';
    // var victoryGraphData = ''
    // if (this.props.victoryData) {
    //   const { victoryData } = this.props
    //    victoryLabels = Object.keys(victoryData)
    //    victoryGraphData = Object.values(victoryData)
    //   // console.log('VICTORY LABELS', victoryLabels)
    //   // console.log('VICTORY DATA', victoryGraphData)
    // }
    //
    //  victoryGraphData = {
    //   labels: victoryLabels,
    //   datasets: [{
    //     data: victoryGraphData,
    //     backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB'],
    //     hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED','#36A2EB']
    //   }]
    // }

    return (
      <VictoryTotal />
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
