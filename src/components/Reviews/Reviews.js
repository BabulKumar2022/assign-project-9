import React, { useEffect, useState } from 'react';
import SingleReview from '../SinglReview/SingleReview';


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
           
            {
                reviews.map(review=> <SingleReview key={review.id} review={review}></SingleReview>)
            }
            
            
        </div>
    );
};

export default Reviews;