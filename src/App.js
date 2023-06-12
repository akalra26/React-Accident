// import logo from './logo.svg';
// import React, { useState } from 'react';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import  Header  from './components/Header';
import Upload from './components/Upload';
import Greet from './components/Greet';
import Sidenav from './components/Sidenav';
import Sidebar from './components/Sidebar';
import ImageUpload from './components/ImageUpload';
import VideoUpload from './components/VideoUpload'
import AccidentVideo from './components/AccidentVideo';
import Output from './components/Output';



  function App() {
   
    return (
        <div className="App">
            <Router>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/Uploadimage" element={<Upload />} />
                    <Route path="/Uploadvideo" element={<VideoUpload />} />
                    <Route path="/AccidentVideos" element={<AccidentVideo />} />
                    <Route path="/Output" element={<Output />} />
                </Routes>
            </Sidebar>
            </Router>
            
        </div>
  
    );
  }

export default App;
