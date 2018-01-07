import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Summary from './Dashboard/Summary'
import TaskBreakdown from './Dashboard/TaskBreakdown';
import CompletionRatio from './Dashboard/CompletionRatio';
import VictoryTotal from './Dashboard/VictoryTotal';
import RepTotal from './Dashboard/RepTotal';

class Dashboard extends Component {
  componentWillMount() {
    var all_time = 9999
      this.props.fetchSummary();
      this.props.fetchChartData(all_time);
      this.props.fetchRadarData(all_time);
      this.props.fetchVictoryData(all_time);
      this.props.fetchRepData(all_time);
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
    return (
      <VictoryTotal />
    )
  }

  renderRepTotal() {
    return (
      <RepTotal />
    )
  }

  render() {
    return (
      <div className="container">
        <h2 className="center-align dashboardHeader">
          Dashboard
        </h2>
        {this.renderOverview()}
        {this.renderBreakdown()}
        {this.renderCompletionRatio()}
        {this.renderVictoryTotal()}
        {this.renderRepTotal()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    summary: state.summary
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
