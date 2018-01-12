import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute, spring } from 'react-router-transition';
// import spring from 'react-motion';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SelectTrack from './components/Track/SelectTrack';
import TaskNew from './components/Tasks/TaskNew';
import * as actions from './actions';
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

// const pageTransitions = {
//   atEnter: {
//     opacity: 0
//   },
//   atLeave: {
//     opacity: 0
//   },
//   atActive: {
//     opacity: 1
//   },
// };

const pageTransitions = {
  atEnter: {
    offset: 100
  },
  atLeave: {
    offset: glide(100),
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

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }


  // <AnimatedSwitch
  // className="switch-wrapper"
  // {...pageTransitions}
  // mapStyles={styles => ({
  //   transform: `translateX(${styles.offset}%)`,
  // })}
  // >
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
              <AnimatedRoute
                exact path="/"
                component={Home}
                {...pageTransitions}
              />
              <AnimatedRoute
                exact path="/dashboard"
                component={Dashboard}
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}

              />
              <AnimatedRoute
                exact path="/tasks/new"
                component={TaskNew}
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
              />
              <Route path="/select-track" component={SelectTrack} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
// </AnimatedSwitch>


export default connect(null, actions)(App);
