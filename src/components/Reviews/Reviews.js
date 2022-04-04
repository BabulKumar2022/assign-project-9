import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import SingleReview from '../SinglReview/SingleReview';
import './Reviews.css'


const Reviews = () => {
    const [reviews, setReviews] =useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);
    return (
        <div>
            <h1>Reviews:{reviews.length}</h1>
            <div className="reviews-container">
                {
                    reviews.map(review=> <SingleReview key={review.id} review={review}></SingleReview>)
                }

            </div>
        </div>
    );
};

export default Reviews;