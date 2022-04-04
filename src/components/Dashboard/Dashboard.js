import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
          name: 'seller A',
          price: 4000,
          sells: 2400,
          amt: 2400,
        },
        {
          name: 'seller B',
          price: 3000,
          sells: 1398,
          amt: 2210,
        },
        {
          name: 'seller C',
          price: 2000,
          sells: 9800,
          amt: 2290,
        },
        {
          name: 'seller D',
          price: 2780,
          sells: 3908,
          amt: 2000,
        },
        {
          name: 'seller E',
          price: 1890,
          sells: 4800,
          amt: 2181,
        },
        {
          name: 'seller F',
          price: 2390,
          sells: 3800,
          amt: 2500,
        },
        {
          name: 'seller G',
          price: 3490,
          sells: 4300,
          amt: 2100,
        },
      ];
    return (
        <div>
            <h1>Dashboard</h1>
            <LineChart width={500} height={200} data={data}>
                <Line dataKey={'price'}></Line>
                <CartesianGrid></CartesianGrid>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;