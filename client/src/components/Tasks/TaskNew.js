import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class TaskNew extends Component {
  componentWillMount() {
    this.props.fetchTask()
  }

  renderTask() {
    if (this.props.task) {
      const count = this.props.task[1]
      const task = this.props.task[0].name
      return (
        <div className="col s6 offset-s3 center-align">
        <h1>{"Here's your task for today"}</h1>
        <h2>{`Do ${count} ${task}`}</h2>
        </div>
      )
    }
  }

  render() {
    console.log(this.props.task)
    return (
      <div className="row" style={{ marginTop: "5%" }}>
        {this.renderTask()}
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
