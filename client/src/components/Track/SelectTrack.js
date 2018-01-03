import React, { Component } from 'react';
import { fetchTracks, selectTrack } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class SelectTrack extends Component {
  componentWillMount() {
    this.props.fetchTracks()
  }

  renderTracks() {
    const { tracks } = this.props
    const { history } = this.props
    if (this.props.tracks) {
      return tracks.map((track) => {
        return (
          <div className="row" key={track._id}>
            <div key={track._id} style={{ paddingBottom: '10px' }} className="col s4 offset-s4">
              <button type="button" onClick={() => this.props.selectTrack(track._id, history)} className="btn-large" style={{ textDecoration: 'uppercase', width: '100%', fontSize: '24px' }}>
                {track.name}
              </button>
            </div>
          </div>
        )
      })

    }
  }

  render() {
    if (this.props.auth) {
      const { profile } = this.props.auth
      // console.log(profile)
    }
    return (
      <div className="container">
        <h3 className="center-align" style={{ paddingBottom: '10px' }}>
          Time to select a track!
        </h3>
        {this.renderTracks()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    tracks: state.tracks
  }
}

export default connect(mapStateToProps, { fetchTracks, selectTrack })(SelectTrack);
