import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SelectTrack from './components/Track/SelectTrack';
import TaskNew from './components/Tasks/TaskNew';
import * as actions from './actions';
import { CSSTransitionGroup } from 'react-transition-group';
import './App.css';

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
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} key="dashboard-key" />
              <Route exact path="/tasks/new" component={TaskNew} />
              <Route path="/select-track" component={SelectTrack} />
            </AnimatedSwitch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null, actions)(App);
