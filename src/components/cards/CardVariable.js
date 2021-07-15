import React, { Component } from "react";
import { format } from "date-fns";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Charts from '../charts/Charts';
import BorderWrapper from 'react-border-wrapper'

export class CardVariable extends Component{

    state = {
        stationId: this.props.location.stationId,
        startDate: "",
        endDate: ""
      };
    
    render(){
      const { startDate, endDate, stationId } = this.state;
      return (
        <Router>
            <br></br>
            <div className="col-md" style={{display: 'flex',  justifyContent:'center', alignItems:'center', width:'100%'}}>
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
            >   <div className="row">
                    <h2>{this.props.location.stationId}</h2>
                </div>     
                
                <div className="row">
                    
                    <label htmlFor="startDate"><h3>Start Date</h3></label>
                    <br></br>
                    <input
                        type="date"
                        onChange={e => this.setState({ startDate: e.target.value })}
                    />
                    {startDate && (
                        <React.Fragment>
                            <br></br>
                            <label htmlFor="startDate"><h3>End Date</h3></label>
                            <br></br>
                            <input
                            type="date"
                            min={startDate}
                            onChange={e => this.setState({ endDate: e.target.value})}
                            
                        />
                        
                        </React.Fragment>
                        
                    )}
                    {startDate && endDate && (
                        // <Link to={{pathname: 'charts', stationId : stationId, staD : startDate, endD : endDate}}>Submit</Link>
                        <Link to={{pathname: 'charts', charts: this.state }}><strong>Submit</strong></Link>
                    )}
                </div>
                
                <Route path='/charts' component={Charts}/>
            </BorderWrapper>
        </div>
        </Router>  
        
        
        
      );
    }
  }
  
export default CardVariable;