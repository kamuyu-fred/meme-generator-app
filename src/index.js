import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Login from './components/Login';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Navbar />
    <Home />
    <App />
  </React.StrictMode>
);


