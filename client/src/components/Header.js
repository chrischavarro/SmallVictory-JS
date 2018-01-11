import React, { Component } from 'react';
import Logo from '../images/small-victory-logo.png'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {Modal} from 'react-materialize'
import * as actions from '../actions'
import { withRouter } from 'react-router';

class Header extends Component {
  renderLogout() {
    // const { history } = this.props
    // // console.log(this.props.history)
    if (this.props.auth) {
      return (
        <ul className="right">
          <li>
            <Modal
              header='Profile Settings'
              className="dashboardSummary"
              style={{ backgroundColor: 'rgb(60, 120, 216)', color: 'white', textAlign: 'center', maxHeight: '90%'}}
              trigger={<a className="">Settings</a>}>
              <div className="col s6 offset-s3">
                <a href="/api/logout"><button className="startTask" style={{ width: '100%'}}>Log Out</button></a><br/>
                <a href="/api/profile/reset"><button className="startTask" style={{ width: '100%'}}>Reset Profile</button></a>
                <a href="mailto:chavarro.christian@gmail.com"><button className="startTask" style={{ width: '100%'}}>Contact</button></a><br/>
              </div>
            </Modal>
          </li>
        </ul>
      )
    }
    else {
      <ul className="right">
        <li>
          <a href="mailto:chavarro.christian@gmail.com">Contact</a>
        </li>
      </ul>

    }
  }

  render() {
    var url = '/'
    if (this.props.auth) {
      url='/dashboard'
    }
    return (
      <nav style={{ backgroundColor: '#3C78D8' }}>
        <div className="nav-wrapper">
            <Link to={`${url}`} className="brand-logo"><img src={Logo} style={{ width: '200px', height: '30px', marginLeft: '20px', marginTop: '15px' }} alt="Small Victory" /></Link>
          {this.renderLogout()}
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
};

export default connect(mapStateToProps, actions)(Header);
