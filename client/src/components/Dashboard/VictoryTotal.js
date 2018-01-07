import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2'

class VictoryTotal extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3 center-align" style={{ }}>
          <h2>{"Here's how your victories have added up"}</h2>
          <Bar
            width={200}
            data={this.props.victoryData}
            options={{
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    stepSize: 1
                  }

                }]
              }
            }}
          />
        </div>
      </div>
    )
  }
}

export default VictoryTotal;
