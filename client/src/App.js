import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import Header from './components/Header';
import SelectTrack from './components/Track/SelectTrack';
import * as actions from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div >
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/select-track" component={SelectTrack} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null, actions)(App);
