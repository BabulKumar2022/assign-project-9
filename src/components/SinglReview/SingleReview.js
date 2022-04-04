import React from 'react';

const SingleReview = (props) => {
    const {userId, title}= props.review;
    return (
        <div>
            <h1>Singlereview:{title}</h1>
        </div>
    );
};

export default SingleReview;