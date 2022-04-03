import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            
            <nav>
               
               <Link to="/">HOME</Link>
               <Link to="/dashboard">DASHBOARD</Link>
               <Link to="/reviews">REVIEWS</Link>
               <Link to="/bloges">BLOGES</Link>
               <Link to="/about">ABOUT</Link> 
            </nav>
        </div>
    );
};

export default Nav;