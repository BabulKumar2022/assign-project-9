import React from 'react';
import {  Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import BarCart from './BarCart';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
          name: 'seller A',
          price: 4000,
          sells: 2400,
          amt: 2400,
          year:2010,
          rice:2500,
        },
        {
          name: 'seller B',
          price: 3000,
          sells: 1398,
          amt: 2210,
          year:2011,
          rice:2700,

        },
        {
          name: 'seller C',
          price: 2000,
          sells: 9800,
          amt: 2290,
          year:2012,
          rice:3000,
        },
        {
          name: 'seller D',
          price: 2780,
          sells: 3908,
          amt: 2000,
          year:2013,
          rice:3500,
        },
        {
          name: 'seller E',
          price: 1890,
          sells: 4800,
          amt: 2181,
          year:2014,
          rice:3100,
        },
        {
          name: 'seller F',
          price: 2390,
          sells: 3800,
          amt: 2500,
          year:2015,
          rice:2600,
        },
        {
          name: 'seller G',
          price: 3490,
          sells: 4300,
          amt: 2100,
          year:2016,
          rice:2800,
        },
      ];
    return (
        <div className='dash-container'>
            
            <div className="chart-1">
            <h1>LineChart</h1>
              <LineChart width={500} height={200} data={data}>
                  <Line dataKey={'price'}></Line>
                  <CartesianGrid></CartesianGrid>
                  <XAxis dataKey="name"></XAxis>
                  <YAxis></YAxis>
                  <Tooltip></Tooltip>
                  <Legend></Legend>
              </LineChart>
            </div>
            <div className="chart-2">
              <BarCart></BarCart>
            </div>
           
        </div>
    );
};

export default Dashboard;