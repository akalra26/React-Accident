import React, { useState } from "react";
import axios from 'axios';

import "./Upload.css";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image.');
    }
  };

  return (
    <div className="App">
      <h1>Accident Detection Using Surveillance Camera</h1>
      <h2>Upload Image:</h2>
      <div className="image-upload-box">
        {/* <img src={file} height='281' width='462' /> */}
        <img src={selectedFile} alt="Uploaded" />
      </div>
      <input type="file" className="btn" onChange={handleFileChange} />
      <br />
      <button onClick={handleUpload} type="submit" className="mybtn">
        Detect
      </button>
    </div>
  );
}

export default Upload;