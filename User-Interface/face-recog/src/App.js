import React from 'react';

import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Attendance from './pages/Attendance';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Header/>} />
      <Route path='/Attendance' element={<Attendance/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/About' element={<About/>} />
    </Routes>
    </div>
  );
}

export default App;
