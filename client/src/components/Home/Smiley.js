import React, { Component } from 'react';
import SmileyLogo from '../../images/smile.svg';

class Smiley extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s2 offset-s5 smileyDiv">
          <img src={SmileyLogo} style={{ width: '200px', height: '100px', verticalAlign: 'middle' }} alt=":)" />
        </div>
      </div>
    )
  }
}

export default Smiley;
