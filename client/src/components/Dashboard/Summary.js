import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import { TweenMax, Power2, LimelineLite } from 'gsap'

class Summary extends Component {
//   componentWillEnter (callback) {
//   const el = this.container;
//   TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
// }
//
// componentWillLeave (callback) {
//   const el = this.container;
//   TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
// }
  render() {
    const {name} = this.props.auth
    let completed = null;
    let attempted = null;
    let percentage = null;
    let track = null;
    if (this.props.summary) {
      completed = this.props.summary[0].completed
      attempted = this.props.summary[1].attempted
      percentage = this.props.summary[3]
      track = this.props.summary[2][0]
    }
    return (
      <div className="row">
        <div className="dashboardSummary col s8 offset-s2 center-align" style={{ }}>
          <h4 className="summaryHeader">{`What's up, ${name}?`}</h4>
          <h4 className="summaryText">{`You're currently on a x day streak`}</h4>
          <h4 className="summaryText">{`You've completed ${completed} out of ${attempted} victories`}</h4>
          <h4 className="summaryText">{`You've completed ${percentage}% of your victories!`}</h4>
          <h4 className="summaryTrack">{`You're on the ${track} track`}</h4>
          <h4 className="summaryText">{`Ready for today's task?`}</h4>
          <Link to="/tasks/new" style={{ textDecoration: 'none', color: 'white' }}>
            <button className="startTask" type="button">
              {"Let's Go!"}
            </button>
          </Link>
        </div>
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

export default connect(mapStateToProps, actions)(Summary);
