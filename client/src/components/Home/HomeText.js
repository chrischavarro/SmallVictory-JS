import React, { Component } from 'react'
import Text from '../../images/small-victory.svg';

class HomeText extends Component {
  render() {
    return (
      <div className="row" style={{ marginBottom: '10px' }}>
        <div className="col s4 offset-s4 homeTextDiv">
          <img src={Text} style={{ width: '400px', height: '100px' }} alt="Small Victory" className="homeText" />
        </div>
      </div>
    )
  }
}

export default HomeText;
