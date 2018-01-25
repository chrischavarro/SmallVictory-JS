import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ReactCountdownClock from 'react-countdown-clock';
import { withRouter } from 'react-router'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TaskNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskStarted: false
    };
  }

  componentDidMount() {
    this.props.fetchTask()
  }

  renderTask() {
    if (this.props.task) {
      const count = this.props.task[1]
      const task = this.props.task[0].name
      return (
        <div className="col s6 offset-s3 center-align taskInfo" style={{ }}>
          <h1 className="headerText taskTitle">{"Here's your task for today"}</h1>
          <h2 className="headerText taskTitle">{`Do ${count} ${task}`}</h2>
          <button
            className="startTimer"
            type="button"
            onClick={() => this.setState({ taskStarted: true })}
          >
            {"START"}
          </button>
        </div>
      )
    }
  }

  startTimer() {
    switch (this.state.taskStarted) {
      case false:
        return null
      case true:
        const { task, history } = this.props
        console.log('HISTORY', this.props.history)
        return (
          <div className="row">
            <div className="col s4 offset-s4 taskTimer" style={{ paddingTop: '50px' }}>
              <ReactCountdownClock
              seconds={300}
              alpha={1}
              color="#3C78D8"
              size={400}
              onComplete={() => this.props.failedTask(task, history)}
              />
            </div>
            <div className="col s12 center-align">
              <button
                className="btn-large center-align finishTask"
                onClick={() => this.props.completedTask(task, history)}
              >
                Finished
              </button>
            </div>
          </div>
        )
        default:
          return null
    }
  }

  render() {
    return (
      <div className="row newTaskDiv" style={{ marginTop: "5%" }}>
        {this.renderTask()}
        <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
        >
        {this.startTimer()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    task: state.task
  }
}

export default connect(mapStateToProps, actions)(TaskNew);
