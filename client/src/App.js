import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import Header from './components/Header';
import SelectTrack from './components/Track/SelectTrack';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="select-track" component={SelectTrack} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
