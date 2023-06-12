import React, { useState } from 'react';
import './VideoUpload.css';
import axios from 'axios';

function VideoUpload() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileChange = (event) => {
    setSelectedVideo(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedVideo);

      await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Video uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Video to upload image.');
    }
  };

  return (
 <div className="App">
  <h1>Accident Detection Using Surveillance Camera</h1>
 <h2>Upload Video:</h2>
     
    <div className="video-upload-box">
      <label htmlFor="file-input">
        {selectedVideo ? (
          <video controls>
            <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <span></span>
        )}
      </label>
      <br/>
    </div>
    <input id="file-input" type="file" accept="video/*" onChange={handleFileChange} />
    <br />
  
   <button onClick={handleUpload} type="submit" className="mybtn">Detect</button>
  </div>
  );
}

export default VideoUpload;
