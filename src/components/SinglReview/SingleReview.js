import React from 'react';
import './SingleReview.css'

const SingleReview = (props) => {
    const {rating, text, name}= props.review;
    return (
        <div className='rev-container'>
            <h3>Name:  {name}</h3>
            <p>Review:  {text}</p>
            <p>Rating:  {rating}</p>

        </div>
    );
};

export default SingleReview;