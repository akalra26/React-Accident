import React, { useState } from 'react';
import axios from 'axios';
import './Video3.css';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
// import AccidentVideo from './src/Videos/Accident-1.mp4';





function Video3({ num }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // const handleFileChange = (event) => {
  //   setSelectedVideo(event.target.files[0]);
  // };

  const handleDetect = () => {
    // axios.get('http://localhost:3002/run-script', {
    //   // Add your request payload data here
    // })
    //   .then(response => {
    //     // Handle the API response data
    //     setItems(response.data);
    //     console.log(response.data);
    //     // navigate('/Output', {state: {result: item.menuId}});
    //   })
    //   .catch(error => {
    //     // Handle any errors that occurred during the API call
    //     console.error(error);
    //   });
    navigate("/Output");
    console.log("navigating to output")
  };

  return (
    <div className="App">
      <h2>Accident Video {num}:</h2>

      <div className="video-upload-box">
        
          {/* {selectedVideo ? (
            <video controls>
              <source src={AccidentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <span></span>
          )} */}
          <video controls>
            <source src='./src/Videos/Accident-4.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        
        <br />
      </div>
      {/* <input id="file-input" type="file" accept="video/*" onChange={handleFileChange} /> */}
      <br />

      <button type="submit" className="mybtn" style={{ marginTop: '10px' }} onClick={handleDetect}>
        Detect
      </button>

      
    </div>

  );
}

export default Video3;