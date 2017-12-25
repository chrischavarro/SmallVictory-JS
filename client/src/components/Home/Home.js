import React, { Component } from 'react';
import Smiley from './Smiley';
import HomeText from './HomeText';
import { Link } from 'react-router-dom';

class Home extends Component {
  renderPage() {
      if (this.props.auth) {
        return (
          <div>
            Home logged in!
          </div>
        )
      } else {
        return (
          <div style={{ marginTop: '15%', textAlign: 'center', color: '#7d7d7d' }}>
            <Smiley />
            <HomeText />
            <span style={{ fontWeight: '400!important', fontSize: '26px', lineHeight: '1.1' }}>
              Do one 5 minute task that <br/> makes you <span style={{ textDecoration: 'underline' }}>better.</span>
            </span>
            <div style={{ marginTop: '20px' }}>
              <Link to="/auth/google" className="waves-effect waves-light btn-large" style={{ backgroundColor: '#3C78D8', fontSize: '25px' }}>Get Started</Link>
              <span style={{ fontWeight: '400!important', fontSize: '26px', textDecoration: 'none' }}>
              </span>
            </div>
          </div>
        )
      }
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }
}

export default Home;
