import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import Header from './components/Header';
import SelectTrack from './components/Track/SelectTrack';
import TaskNew from './components/Tasks/TaskNew';
import * as actions from './actions';
// import styles from './App.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/tasks/new" component={TaskNew} />
              <Route path="/select-track" component={SelectTrack} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null, actions)(App);
