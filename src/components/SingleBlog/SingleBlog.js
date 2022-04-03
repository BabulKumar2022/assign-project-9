import React from 'react';

const SingleBlog = (props) => {
    const {userId, title} = props.blog;
    return (
        <div>
            <h2>{title} </h2>
        </div>
    );
};

export default SingleBlog;