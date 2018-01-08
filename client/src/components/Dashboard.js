import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Summary from './Dashboard/Summary'
import TaskBreakdown from './Dashboard/TaskBreakdown';
import CompletionRatio from './Dashboard/CompletionRatio';
import VictoryTotal from './Dashboard/VictoryTotal';
import RepTotal from './Dashboard/RepTotal';

import Transition from 'react-transition-group/Transition'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FadeAndSlideTransition from '../FadeAndSlideTransition';

// function FadeTransition ({children, duration, in: inProp}) {
//   const defaultStyle = {
//     transition: `${duration}ms ease-in`,
//     transitionProperty: 'opacity, transform'
//   }
//
//   const transitionStyles = {
//     entering: {
//       opacity: 0,
//       transform: 'translateY(-10%)'
//     },
//     entered: {
//       opacity: 1,
//       transform: 'translateY(0)'
//     },
//     exiting: {
//       opacity: 0,
//       transform: 'translateY(-10%)'
//     }
//   };
//
//   return (
//     <Transition in={inProp} timeout={{
//       enter: 0,
//       exit: duration
//     }}>
//       {
//         (state) => {
//           if (state === 'exited') {
//             return null;
//           }
//
//           return React.cloneElement(children, {
//             style: Object.assign({}, defaultStyle, transitionStyles[state])
//           })
//         }
//       }
//     </Transition>
//   )
// }
const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

class Dashboard extends Component {
  componentWillMount() {
    var all_time = 9999
      this.props.fetchSummary();
      this.props.fetchChartData(all_time);
      this.props.fetchRadarData(all_time);
      this.props.fetchVictoryData(all_time);
      this.props.fetchRepData(all_time);
  }

  render() {
    return (
      <div className="container">
        <h2 className="center-align dashboardHeader">
          Dashboard
        </h2>
        <TransitionGroup>
          <Fade>
            <Summary />
          </Fade>
        </TransitionGroup>
        <TaskBreakdown />
        <CompletionRatio />
        <VictoryTotal />
        <RepTotal />
      </div>
    )
  }
}

export default connect(null, actions)(Dashboard);
