import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2'

class CompletionRatio extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3 center-align" style={{ }}>
          <h2>{"Here's how you've done with your tasks"}</h2>
          <Radar
            width={300}
            data={this.props.radarData}
            options={{
              scale: {
                  ticks: {
                    beginAtZero: true,
                    stepSize: 1
                  }
              }
            }}
          />
        </div>
      </div>
    )
  }
}

export default CompletionRatio;
