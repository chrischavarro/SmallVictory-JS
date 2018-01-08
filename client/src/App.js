import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute, spring } from 'react-router-transition';
// import spring from '../../src/spring';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SelectTrack from './components/Track/SelectTrack';
import TaskNew from './components/Tasks/TaskNew';
import * as actions from './actions';
import { CSSTransitionGroup } from 'react-transition-group';
import './App.css';

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24,
  });
}

function slide(val) {
  return spring(val, {
    stiffness: 125,
    damping: 16,
  });
}

const pageTransitions = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: glide(-100),
  },
  atActive: {
    offset: glide(0),
  },
};

const topBarTransitions = {
  atEnter: {
    offset: -100,
  },
  atLeave: {
    offset: slide(-150),
  },
  atActive: {
    offset: slide(0),
  },
};

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
              className="switch-wrapper"
              {...pageTransitions}
              mapStyles={styles => ({
                transform: `translateX(${styles.offset}%)`,
              })}
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
