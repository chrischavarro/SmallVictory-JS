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

  render() {
    return (
      <div className="container">
        <h2 className="center-align dashboardHeader">
          Dashboard
        </h2>
        <Summary />
        <TaskBreakdown />
        <CompletionRatio />
        <VictoryTotal />
        <RepTotal />
      </div>
    )
  }
}

export default connect(null, actions)(Dashboard);
