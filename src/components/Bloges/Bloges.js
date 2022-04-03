import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Bloges = () => {
    const [bloges, setBloges]= useState([]);
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setBloges(data));
    },[]);
    return (
        <div>
            <h1>Bloges:{bloges.length}</h1>
            {
                bloges.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
            }

        </div>
    );
};

export default Bloges;