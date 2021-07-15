import React , { Component } from "react";
import Chart from "chart.js";
// import { Line } from "react-chartjs-2";

export class SoilMoisture extends Component{
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
                unit: 'week'
              },

              scaleLabel: {
                display: true,
                labelString: 'Date and Time'
              }
            //   display: true,
            //   labelString: 'Date and Time'

            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100
              },
              scaleLabel: {
                display: true,
                labelString: 'Soil Moisture %'
              }
            //   display: true,
            //   labelString: 'Soil Moisture %'
            }
          ]
        }
      },
      data: {
        labels: this.props.data.map(d => d.time),
        datasets: [{
          label: this.props.title,
          data: this.props.data.map(d => d.value),
          fill: start,
          backgroundColor: gradient,
          pointRadius: 0.5,
          borderColor: this.props.color,
          borderWidth: 1,
          lineTension: 0
        }]
      },
      options: {
        //Customize chart options
        responsive: true,
        maintainAspectRatio: true,
        
      }
    });
  }
  render() {
    return <canvas ref={this.chartRef} />;
  }
}
export default SoilMoisture;