import React, { Component } from "react";
import CardStation from './CardStation';
import PropTypes from 'prop-types';

export class CardCluster extends Component{
    
    render(){
     
      return(
        
        //console.log(this.props.card.stations)

          <div>
              <h2><strong>{ this.props.card.cluster}</strong></h2>
              
              {this.props.card.stations.map(station => (

                <CardStation key={station.id} station={station}/>
              ))}              
              
          </div>
        
        
      );
    }
  }
  CardCluster.propTypes  = {
    card: PropTypes.array.isRequired
  }  
export default CardCluster;