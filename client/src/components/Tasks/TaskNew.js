import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class TaskNew extends Component {
  componentWillMount() {
    this.props.fetchTask()
  }

  render() {
    console.log(this.props.task)
    return (
      <div className="container">
        Here is your task
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
