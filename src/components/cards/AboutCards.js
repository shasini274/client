// import React, { Component } from "react";
// import CardCluster from './CardCluster';
// import PropTypes from 'prop-types';
// import BorderWrapper from 'react-border-wrapper'

// export class AboutCards extends Component{
    
    
//     render(){
        
//       return this.props.aboutCards.map((aboutCard) => (
//         <div className="col-md-3" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>  
//             <BorderWrapper
//               borderColour="#00bcf1"
//               borderWidth="5px"
//               borderRadius="15px"
//               borderType="solid"
//               innerPadding="30px"
//               topPosition={0.05}
//               topOffset="22px"
//               topGap="4px"
//               rightPosition={0.1}
//               rightOffset="22px"
//               rightGap="4px"
//             >
//                 <div>
//                     <h2><strong>{ aboutCard.cluster}</strong></h2>
                    
//                     {aboutCard.stations.map(aboutStation => (
//                         <div className="col-md-6">
//                             <h4>{ aboutStation.id}</h4>
//                         </div>
                        
//                         // <CardStation key={station.id} station={station}/>
//                     ))}
//                     <button onClick={this.props.addStation.bind(this, id)} style={btnStyle}>
//                     +
//                     </button>              
                
//                 </div>
//             </BorderWrapper>
            
//           </div>
          
//         // </div>
        
        
//       ));
//     }
//   }
// AboutCards.propTypes  = {
//   cards: PropTypes.array.isRequired
// }

// const btnStyle = {
//     background: "#ff0000",
//     color: "#fff",
//     border: "none",
//     padding: "5px 9px",
//     borderRadius: "50%",
//     cursor: "pointer",
//     float: "right",
//   };
// export default AboutCards;