import React, { Component } from "react";
import PropTypes from 'prop-types';
import SoilMoistureChart from './SoilMoistureChart';
import TemperatureChart from './TemperatureChart';

export class Charts extends Component{
    
    state = {
        feeds: []
    };
    constructor(props) {
        super(props)
        this.state = { feeds: '' };
    }
    componentDidMount(){
        
        const { startDate, endDate, stationId } = this.props.location.charts;
        const localhosturl = `/api/pastdata?staD=${startDate}&endD=${endDate}&staId=${stationId}`
        
        fetch(localhosturl)
        
        .then(res=> res.json())
        .then(data => this.setState({ feeds: data}))
        // .then(data => console.log(data))
    }
    render(){
        
        let moist, temp;
        if(this.state.feeds !== undefined && this.state.feeds[1] !== undefined) {
            
            moist = <SoilMoistureChart data={this.state.feeds[1].data} title={this.state.feeds[1].title} color="#70CAD1"/>
        }
        if(this.state.feeds !== undefined && this.state.feeds[0] !== undefined) {
            temp = <TemperatureChart data={this.state.feeds[0].data} title={this.state.feeds[0].title} color="#3E517A"/>
        } 
      
      return (
        
        <div>
            <div>                
                {moist}
            </div>
            <div>
                {temp}
            </div>
        </div>     
        
        
      );
    
    }
  }

export default Charts;