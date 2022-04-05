import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import SingleReview from '../SinglReview/SingleReview';
import './Home.css'


const Home = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[]);
   
    const navigate = useNavigate();
    const showreviewall = () =>{
        navigate('/reviews')
    }
    
    return (
        <div  className="header-area">
            <div className="header-hero">
                <div className="heder-left-text">
                  <h1>Excellent Laptop Pro Village </h1>
                  <h1 className='color'>Your Future on Going</h1>
                  <p>The best for you. Now here are avilable pro smart high configaration laptop. Laptop Village is solution your need. core i7, corei5 core i3, core2dou are on your dor to one step.</p>
                  <div className="btn">
                  <button className='link' onClick={showreviewall}>Details</button>
                  </div>
                </div>
                <div className="heder-right-img">
                    <img src='./images/laptop.png' alt=''/>
                </div>
            </div>
            <div className="home-review">
                    <h1>Review</h1>
                    <div className="slice-review-container">
                    {
                        reviews.slice(0,3).map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                    }
                    </div>
                  {/* <Link className='link' to="/reviews">REVIEWS</Link> */}
                  <button className='link' onClick={showreviewall}>Review all</button>
            </div>
          
        </div>
        
    );
};

export default Home;