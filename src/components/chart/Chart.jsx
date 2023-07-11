import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Week 0',
    user: 150,
    Guest: 250,
  },
  {
    name: 'Week 1',
    user: 100,
    Guest: 200,
  },
  {
    name: 'Week 2',
    user: 495,
    Guest: 395,
  
  },
  {
    name: 'Week 3',
    user: 150,
    Guest: 200,
  
  },
  {
    name: 'Week 4',
    user: 300,
    Guest: 450,
  
  },
  {
    name:'Week 5',
    user: 190,
    Guest:235,
  
  },
];


export default function Chart() {
  return (
      <div className='chart'>
       
        <div className='chartWrapper'>
        <h3 className="chartTitle">Activities</h3>
        <div className='graph'>
            <ResponsiveContainer width="100%" aspect={4/1} >
                <LineChart data={data}>
                  <XAxis dataKey="name"/>
                  <YAxis />
                  <Line type="monotone" dataKey="user" stroke='#9BDD7C' stroke-width='3px'/>
                  <Line type="monotone" dataKey="Guest" stroke='#E9A0A0' stroke-width='3px'/>
                  <Line />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
    </div>
  )
}
