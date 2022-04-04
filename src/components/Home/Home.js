import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
    return (
        <div  className="header-area">
            
            <div className="header-hero">
                <div className="heder-left-text">
                  <h1>Exelent Laptop Pro Village </h1>
                </div>
                <div className="heder-right-img">
            
                <h1>img</h1>
                <img src='./images/laptop.png' alt=''/>
                </div>
                
            </div>
            <div className="home-review">
                  <h1>Review</h1>
                  <Link className='link' to="/reviews">REVIEWS</Link>
            </div>
          
        </div>
        
    );
};

export default Home;