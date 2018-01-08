import React, { Component } from 'react';
import Logo from '../images/small-victory-logo.png'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    var url = '/'
    if (this.props.auth) {
      var url='/dashboard'
    }
    return (
      <nav style={{ backgroundColor: '#3C78D8' }}>
        <div className="nav-wrapper valign-wrapper">
          <Link to={url}>
            <img src={Logo} style={{ width: '200px', height: '30px', marginTop: '20px', marginLeft: '20px' }} alt="Small Victory" />
          </Link>
        </div>
      </nav>
    )
  }
}
// <ul className="right">
// <li><a href="/api/logout">Log Out</a></li>
// </ul>

function mapStateToProps({ auth }) {
  return { auth }
};

export default connect(mapStateToProps)(Header);
