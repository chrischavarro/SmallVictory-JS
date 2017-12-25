import React, { Component } from 'react';
import SmileyLogo from '../../images/smile.svg';

class Smiley extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s2 offset-s5">
          <img src={SmileyLogo} style={{ width: '200px', height: '100px', verticalAlign: 'middle' }} />
        </div>
      </div>
    )
  }
}

export default Smiley;