import React, { Component } from "react";
import { BrowserRouter as Router, Route, RouteHandler, Link} from "react-router-dom";
import io from "socket.io-client";

import Header from './components/layouts/Header';
import TemperatureChart from "./components/charts/TemperatureChart";
// import AboutCards from './components/cards/AboutCards';
import Cards from "./components/cards/Cards"
import CardVariable from './components/cards/CardVariable';
// import Charts from './components/charts/Charts';
import axios from "axios";

class App extends Component{ 
  
  state = {
    cards: [],
    datacards: []    
    
  };
  
  componentDidMount() {
    const localhosturl = '/api'
    fetch(localhosturl)
    .then(res=> res.json())
    // .then(data => console.log(data));
    .then(data => this.setState({ cards: data }))
    
    
    this.socket = io('http://localhost:5000');
    
    this.socket.on('cluster_data', (msg) => {  
      console.log(msg);    
      this.setState({cards: this.state.cards.map(card => {
        card.stations.map(station => {
          if (station.id === msg.station){
            console.log(station.measurements);
            console.log(msg.data);
            station.measurements.push(msg.data);

            // station.time = msg.time;
            // station.temperature = msg.data.temperature;
            // station.soilMoisture = msg.data.soilMoisture;
            // console.log(station.id, msg.station)
          }
        })
        return card;
      })})     
    });

    
  }
    
  render(){
    //console.log(this.state.cards)
    return (
      <Router>
        <div className="App">
          <div className="container">
          <Header />            
            <Route exact path='/' render={props => (
              <React.Fragment>                  
                <br></br>
                <div className="row">
                  <Cards cards={this.state.cards}/>
                  <br></br>
                </div>              
              </React.Fragment>
                  )}/>
            <Route path='/cardvariable' component={CardVariable}/>
            {/* <Route path="/about" render={props => (
              <React.Fragment>                  
                <br></br>
                <div className="row">
                  <AboutCards aboutCards={this.state.cards}
                    addStation={this.addStation}
                  />
                  <br></br>
                </div>              
              </React.Fragment>
                  )}/>                 */}
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
