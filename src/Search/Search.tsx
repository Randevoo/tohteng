import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router";

import SearchBar from "../SearchBar"

const Search: React.FC<RouteComponentProps> = () => {
  // const [isModalVisible, setModalVisible] = useState(false);
  return (
    <div className="Search" style={{  backgroundColor: 'white' }}>
      <div style={{ 
         position: 'relative',
         textAlign: 'center',
         color: 'white'
      }}>
        <img src='https://poipubeach.org/wp-content/uploads/2018/03/alakai-swamp-hike.jpg' style={{ width: '100%', objectFit: 'contain' }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'black'
        }}>
          Explore & Travel The World With a Local Guide Today. <br/>
          Learn More
        </div>
      </div>
      <div style={{
        marginTop: '-200px',
        marginBottom: '160px',
      }}>
        <SearchBar />
      </div>
      
      <div style={{
        position: 'relative',
        textAlign: 'center',
        color: 'white'}}>
        
        <img src='https://poipubeach.org/wp-content/uploads/2018/03/alakai-swamp-hike.jpg' 
          style={{ 
            width: '100%', 
            objectFit: 'contain',
            marginBottom: '2px',
            filter: 'brightness(50%)'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white'
        }}>Japan</div>
      </div>

      <div style={{
        position: 'relative',
        textAlign: 'center',
        color: 'white'}}>
        <img src='https://poipubeach.org/wp-content/uploads/2018/03/alakai-swamp-hike.jpg' 
          style={{ 
            width: '100%', 
            objectFit: 'contain',
            filter: 'brightness(50%)'
          }} 
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white'
        }}>Bali</div>
      </div>

      {/* I need photos plox */}
      {/* <img src='https://www.coxandkingsusa.com/resources/images/countries/japan.jpg' 
        className="japanImg" 
        style={{ 
          minHeight: '450px',
          minWidth: '253px',
          width: '100%',
          height: 'auto',
        }} />
      <img src='https://specials-images.forbesimg.com/imageserve/675172642/960x0.jpg?fit=scale' 
        className="baliImg" 
        style={{ 
          minHeight: '450px',
          minWidth: '253px',
          width: '100%',
          height: 'auto',
        }} /> */}


    </div>
  );
};

export default withRouter(Search);