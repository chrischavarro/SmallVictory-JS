import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {
  componentWillMount() {
      this.props.fetchSummary();
  }

  renderOverview() {
    const {name} = this.props.auth
    return (
      <div className="row">
        <div className="col s6 offset-s3 center-align" style={{ }}>
          <h4>Whats up, {name}!</h4>
          <h4>Youre currently on a 0 day streak</h4>
          <h4>Youve completed x out of x victories</h4>
          <h4>Youve completed x% of your victories!</h4>
          <h4>Youre on the x track</h4>
          <h4>Ready for todays task?</h4>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="container">
        <h2 className="center-align">
          Dashboard
        </h2>
        {this.renderOverview()}
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
