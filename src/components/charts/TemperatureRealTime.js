import React, { Component } from "react";
import Chart from "chart.js";
import { Line } from "react-chartjs-2";

export class TemperatureRealTime extends Component{
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'line',
      options: {
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'minute'
              },
              scaleLabel: {
                display: true,
                labelString: 'Date and Time'
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0
                // max: 35
              },
              scaleLabel: {
                display: true,
                labelString: 'Temperature'
              }
            }
          ]
        }
      },
      data: {
        labels: this.props.data.map(d => d.time),
        datasets: [{
          label: this.props.title,
          data: this.props.data.map(d => d.temperature),
          fill: false,
          backgroundColor: this.props.color,
          pointRadius: 0.5,
          borderColor: this.props.color,
          borderWidth: 1,
          lineTension: 0
        }]
      }
    });
  }
  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map(d => d.time);
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.temperature);
    this.myChart.update();
  }
  render() {
    return <canvas ref={this.chartRef} />;
  }
}
export default TemperatureRealTime;