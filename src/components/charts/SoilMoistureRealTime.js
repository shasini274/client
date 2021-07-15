import React , { Component } from "react";
import Chart from "chart.js";
import { Line } from "react-chartjs-2";

export class SoilMoistureRealTime extends Component{
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }
  

  componentDidMount() {
    // const ctx = canvas.getContext("2d");
    // const gradient = ctx.createLinearGradient(0, 0, 0, height);
    // gradient.addColorStop(0, 'rgba(250,174,50,1)');   
    // gradient.addColorStop(1, 'rgba(250,174,50,0)');

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
                // max: 100
              },
              scaleLabel: {
                display: true,
                labelString: 'Soil Moisture %'
              }
            }
          ]
        }
      },
      data: {
        

        labels: this.props.data.map(d => d.time),
        datasets: [{
          label: this.props.title,
          data: this.props.data.map(d => d.soilMoisture),
          fill: false,
          backgroundColor: this.props.color,
          pointRadius: 0.5,
          borderColor: this.props.color,
          borderWidth: 1,
          lineTension: 0
        }]
      },
      
    });
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map(d => d.time);
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.soilMoisture);
    this.myChart.update();
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}
export default SoilMoistureRealTime;

