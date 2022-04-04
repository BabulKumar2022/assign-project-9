import React from 'react';
import './Bloges.css'

const Bloges = () => {
    
    return (
        
        <div className='blog-cotainer'>
             <h1>Bloges:</h1>
           <div className="bloges">
           <div className="first">
            <h3>Context API কি কি কাজে লাগে?</h3>
            <p>রিয়াক্ট এপ্লিকেশনে সাধারণত প্রপ্সের মাধ্যমে ডাটা পাস করা হয় উপর হতে নিচের দিকে। কিন্তু কোন কোন সময় নিচ হতে উপরের ধাপে ডাটা পাঠানোর প্রয়োজন হয় সে ক্ষেত্রে কন্টেক্স এপিআই কার্যকর ভুমিকা রাখে। গ্লবালি ডাটা সেয়ার করার জন্য এটা ব্যবহার করা হয়। কোন ডাটা বিভিন্ন লেভেলের কম্পনেন্টের মাঝে পাস করার জন্য কন্টেক্স ব্যবহার করা হয়।</p>
            </div>
            
            
            <div className="first">
                <h3>Semantic tag কি?</h3>
                <p>সকল আধুনিক ব্রাউজারে সাপোর্ট করার জন্য HTML5 ভারসনে কনটেন্টের সহিত সঙ্গতি রেখে নতুন ট্যাগ তৈরি করেছে  সে গুলোই হল সিমেন্টিক ট্যাগ। যেমন form, tale, nav, header,body,footer, article, aside, section।  ট্যাগ গুলো দেখেই কটেন্ট সম্পর্কে জানা যায়। NAV ট্যাগ দ্বারা মেনুবার তৈরি করা হয়। footer নাম দেখেই বোঝা যায় পেজের একেবারেই নিচের অংশ।  </p>
            </div>
           </div>
            
            

        </div>
    );
};

export default Bloges;