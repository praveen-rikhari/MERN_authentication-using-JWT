import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Batman from './pages/Batman';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration : 2000}} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/batman" element={<Batman />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
