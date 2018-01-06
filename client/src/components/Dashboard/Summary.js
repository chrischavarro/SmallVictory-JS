import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Summary extends Component {
  render() {
    const { name, completed, attempted, percentage, track } = this.props;
    console.log(this.props)
    return (
      <div className="row">
        <div className="col s6 offset-s3 center-align" style={{ }}>
        <h4>{`What's up, ${name}?`}</h4>
        <h4>{`You're currently on a x day streak`}</h4>
        <h4>{`You've completed ${completed} out of ${attempted} victories`}</h4>
        <h4>{`You've completed ${percentage}% of your victories!`}</h4>
        <h4>{`You're on the ${track} track`}</h4>
        <h4>{`Ready for today's task?`}</h4>
        <Link to="/tasks/new" style={{ textDecoration: 'none', color: 'white' }}>
          <button
            className="btn-large"
            type="button"
          >
              Lets Go!
          </button>
        </Link>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Summary);
