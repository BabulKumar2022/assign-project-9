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
                  <h1>Exelent Laptop Pro Village </h1>
                  <h1>Your Future on Going</h1>
                  <p>The best for you</p>
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