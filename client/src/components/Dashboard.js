import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Summary from './Dashboard/Summary'
import TaskBreakdown from './Dashboard/TaskBreakdown';
import CompletionRatio from './Dashboard/CompletionRatio';
import VictoryTotal from './Dashboard/VictoryTotal';
import RepTotal from './Dashboard/RepTotal';

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

  renderCharts() {
    if (this.props.summary && this.props.summary[1].attempted) {
      return (
        <div>
          <TaskBreakdown />
          <CompletionRatio />
          <VictoryTotal />
          <RepTotal />
        </div>
      )
    }
  }

  render() {
    console.log(this.props.summary)


    return (
      <div className="container">
        <Summary />
        {this.renderCharts()}
      </div>
    )
  }
}

function mapStateToProps({summary}) {
  return { summary }
}

export default connect(mapStateToProps, actions)(Dashboard);
