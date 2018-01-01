import React, { Component } from 'react';
import { fetchTracks } from '../../actions';
import { connect } from 'react-redux'

class SelectTrack extends Component {
  componentDidMount() {
    // this.props.fetchTracks() should pass the user's tags
  }

  renderTracks() {
      this.props.fetchTracks()
  }

  render() {
    if (this.props.auth) {
      const { profile } = this.props.auth
      console.log(profile)
    }
    return (
      <div className="container">
      Time to select a track!
      {this.renderTracks()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchTracks })(SelectTrack);
