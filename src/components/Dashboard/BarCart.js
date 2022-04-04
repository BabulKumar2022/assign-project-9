import React from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const BarCart = () => {
    const data = [
        {
          "name": "Page A",
          "demand": 4000,
          "supply": 2400
        },
        {
          "name": "Page B",
          "demand": 3000,
          "supply": 1398
        },
        {
          "name": "Page C",
          "demand": 2000,
          "supply": 4800
        },
        {
          "name": "Page D",
          "demand": 2780,
          "supply": 3908
        },
        {
          "name": "Page E",
          "demand": 1890,
          "supply": 4800
        },
        {
          "name": "Page F",
          "demand": 2390,
          "supply": 3800
        },
        {
          "name": "Page G",
          "demand": 3490,
          "supply": 4300
        }
      ]
    return (
        <div>
            <h1>Barchart</h1>
            <BarChart width={500} height={200} data={data}>
                <XAxis dataKey="name"></XAxis>
                <YAxis datakey="demand"></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey="demand" fill="#8884d8"></Bar>
                <Bar dataKey="supply" fill="#82ca9d"></Bar>


            </BarChart>
        </div>
    );
};

export default BarCart;