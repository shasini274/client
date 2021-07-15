import React, { Component } from "react";
import { BrowserRouter as Router, Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import SoilMoistureRealTime from '../charts/SoilMoistureRealTime';
import TemperatureRealTime from '../charts/TemperatureRealTime';
// import Charts from '../charts/Charts';



export class CardStation extends Component{
    
    render(){
        const { id, measurements } = this.props.station;
        // measurements[measurements.length - 1].soilMoisture
        // console.log();
     
      return (

        <div>
            <br></br>              
            <Link to={{pathname: 'cardvariable', stationId : id}}>
                <h4>{ id }</h4>
            </Link>
            <br></br>
            <Table celled>
                <Table.Header>                    
                    <Table.Row>
                        <Table.HeaderCell>Parameter</Table.HeaderCell>
                        <Table.HeaderCell>Value</Table.HeaderCell>
                        <Table.HeaderCell>Last Updated</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Label ribbon>Soil Moisture</Label>
                        </Table.Cell>
                        <Table.Cell>{ measurements[measurements.length - 1].soilMoisture }</Table.Cell>
                        <Table.Cell>{ measurements[measurements.length - 1].time }</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Label ribbon>Temperature</Label>
                        </Table.Cell>
                        <Table.Cell>{ measurements[measurements.length - 1].temperature }</Table.Cell>
                        <Table.Cell>{ measurements[measurements.length - 1].time}</Table.Cell>
                    </Table.Row>
                </Table.Body>
                
            </Table>
            <SoilMoistureRealTime data={measurements} title='Soil Moisture' color="#70CAD1"/>
            <TemperatureRealTime data={measurements} title='Temperature' color="#70CAD1"/>

             
        </div>
      );
    }
  }
  CardStation.propTypes  = {
    station: PropTypes.object.isRequired,
    //chartHandle: PropTypes.func.isRequired
  }  

export default CardStation;