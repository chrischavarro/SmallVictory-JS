import React, { Component } from 'react';
import Logo from '../images/small-victory-logo.png'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav style={{ backgroundColor: '#3C78D8' }}>
        <div className="nav-wrapper">
          <Link to ="/">
            <img src={Logo} style={{ width: '200px', height: '30px', marginTop: '20px', marginLeft: '20px' }}/>
          </Link>
        </div>
      </nav>
    )
  }
}

export default Header;
