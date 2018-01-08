import React, { Component } from 'react';
import { fetchTracks, selectTrack } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class SelectTrack extends Component {
  componentWillMount() {
    this.props.fetchTracks()
  }

  renderTracks() {
    var tracks = null
    if (this.props.tracks) {
      const { history } = this.props
      var { tracks } = this.props
      return this.props.tracks.map((track) => {
        return (
          <div className="row" key={track._id}>
            <div key={track._id} style={{ paddingBottom: '10px' }} className="col s6 offset-s3">
              <button
                onClick={() => this.props.selectTrack(track._id, history)}
                className="btn-large"
                style={{ textDecoration: 'uppercase', width: '100%', fontSize: '24px' }}
              >
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
    }
    return (
      <div className="container col s12 center-align">
        <span className="greetingText" style={{ marginTop: '150px' }}>{`Select Your Track`}</span>
        <div className="container col s8 offset-s2 wizardFormPage" style={{ paddingTop: '40px' }}>
          {this.renderTracks()}
        </div>
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
