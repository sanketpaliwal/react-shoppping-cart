// src/App.js
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from './components/Products';

function Home() {
  return (
    
    <div className='bkl'
      style={{
        height: '100vh',
        width:'100vw',
        margin: "0",
          padding: "0",
     overflow:"hidden",
    
        // width:"90vw",
        display: 'flex',
        justifyContent: 'center',
        
        alignItems: 'center',
        }}>
          <img style={{zIndex:"-1"}}
    class="demo-bg"
    src="https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg"
    alt=""
  ></img>
     
      <div >
        <h1 style={{fontSize:"45px",color:"black"}}>Welcome To Paradise Nursery</h1>
        <p className="py-4" style={{fontSize:"20px",color:"black",}}>Where Green Meets Serenity</p>
        <Link to="/products">
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
            Get Started
          </button>
        </Link>
      </div>
      <div style={{ marginLeft: '50px', maxWidth: '580px', fontSize: '18px', lineHeight: '1.5', }}>
        <h2 style={{fontSize:"25px",fontWeight:"bold"}}>Welcome to Paradise Nursery, where green meets serenity!</h2>
        <p style={{fontSize:"20px",backgroundColor:"",color:"black"}}>
          At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.
        </p>
        <p style={{fontSize:"20px",backgroundColor:"",color:"black"}}>
          Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office. Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.
        </p>
      
      </div>
    </div>
  );
}

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </Router>
  );
}

export default App;
