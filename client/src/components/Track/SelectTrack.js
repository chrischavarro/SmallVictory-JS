import React, { Component } from 'react';
import { fetchTracks, selectTrack } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class SelectTrack extends Component {
  componentWillMount() {
    this.props.fetchTracks()
  }

  renderTracks() {
    const { history } = this.props
    if (this.props.tracks) {
      // console.log(this.props.tracks)
      const { tracks } = this.props
      return tracks.map((track) => {
        let checkTrack = ''
        if (track.name !== 'Fitness') { checkTrack = 'disabled'}
        return (
          <div className="row" key={track._id}>
            <div key={track._id} className="col s6 offset-s3 trackButtonDiv">
              <button type="button"
                onClick={() => this.props.selectTrack(track._id, history)}
                className={`btn-large ${checkTrack} trackButton`}
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
    return (
      <div className="container col s12 center-align trackDiv">
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
    tracks: state.tracks
  }
}

export default connect(mapStateToProps, { fetchTracks, selectTrack })(SelectTrack);
