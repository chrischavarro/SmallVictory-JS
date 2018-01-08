import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Summary from './Dashboard/Summary'
import TaskBreakdown from './Dashboard/TaskBreakdown';
import CompletionRatio from './Dashboard/CompletionRatio';
import VictoryTotal from './Dashboard/VictoryTotal';
import RepTotal from './Dashboard/RepTotal';

// import Transition from 'react-transition-group/Transition'
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Dashboard extends Component {

  componentWillMount() {
    var all_time = 9999
      this.props.fetchSummary();
      this.props.fetchChartData(all_time);
      this.props.fetchRadarData(all_time);
      this.props.fetchVictoryData(all_time);
      this.props.fetchRepData(all_time);
  }

  renderSummary() {
    const item = 'item'
    return (
      <Summary key={item} />
    )
  }

  render() {
    return (
      <div className="container">
        <h2 className="center-align dashboardHeader">
          Dashboard
        </h2>
        <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={300}
        >
          {this.renderSummary()}
        </ReactCSSTransitionGroup>
        <TaskBreakdown />
        <CompletionRatio />
        <VictoryTotal />
        <RepTotal />
      </div>
    )
  }
}

export default connect(null, actions)(Dashboard);
