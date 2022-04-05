import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div>
            
            <nav className='nav-style'> 
               <Link className='link' to="/">HOME</Link>
               <Link className='link'  to="/dashboard">DASHBOARD</Link>
               <Link className='link' to="/reviews">REVIEWS</Link>
               <Link className='link' to="/bloges">BLOGES</Link>
               <Link className='link' to="/about">ABOUT</Link> 
            </nav>
        </div>
    );
};

export default Nav;