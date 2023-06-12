import React, { useState } from 'react';
import './AccidentVideo.css';
import Video from './Video'; 
import Video2 from './Video2';
import Video3 from './Video3';
import axios from 'axios';

function AccidentVideo() {
 
  return (
    <>
 <div className = "App">
 <h1>Accident Detection Using Surveillance Camera</h1>
  <br />
    <div className="container">
        <Video num="1" />
        <Video2 num="2" />
        <Video3 num="3" />
     </div>
  </div>
</>
  
  );
}

export default AccidentVideo;
