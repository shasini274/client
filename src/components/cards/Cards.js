import React, { Component } from "react";
import CardCluster from './CardCluster';
import PropTypes from 'prop-types';
import BorderWrapper from 'react-border-wrapper'

export class Cards extends Component{
    
    render(){
      //console.log(Cards);
      //return this.props.Cards.map((card) => (console.log(card)));
      return this.props.cards.map((card) => (
        // <div className="row">
          <div className="col-md-6" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>  
            <BorderWrapper
              borderColour="#00bcf1"
              borderWidth="5px"
              borderRadius="15px"
              borderType="solid"
              innerPadding="30px"
              // topElement = 'Cluster '
              topPosition={0.05}
              topOffset="22px"
              topGap="4px"
              // rightElement='Cluster'
              rightPosition={0.1}
              rightOffset="22px"
              rightGap="4px"
            >        
              <CardCluster key={card.id} card={card}/>
            </BorderWrapper>
            
          </div>
          
        // </div>
        
        
      ));
    }
  }
Cards.propTypes  = {
  cards: PropTypes.array.isRequired
}
export default Cards;