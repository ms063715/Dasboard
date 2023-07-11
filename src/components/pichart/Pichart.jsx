import React from 'react'
import './pichart.css'
import { PieChart, Pie, Cell } from "recharts";

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  

export default function Pichart() {
  return (
    <div className='pieChart'>
        <div className='pieWrapper'>
            <h2 className='Product'>Top Product</h2>
            <div className='pieGraph'>
                <div>
            <PieChart width={200} height={200} className='pieCircle' >
                <Pie
                    data={data}
                    cx={85}
                    cy={85}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
            </div>
            <div className='pieContent'>
                <ul className='pieUl'>
                    <li>Electric-Car <p>25%</p></li>
                    <li>Bike<p>25%</p></li>
                    <li>Petrol-Car<p>33%</p></li>
                    <li>Desial-Car<p>17%</p></li>
                </ul>
            </div>
            </div>
            
        </div>

        <div className='schedduleWrapper'>
            <h2 className='pieHeading1'>Today's schedule</h2>
            <div className='lastSection'>
                <div className='last'>
                    <h4 className='Meeting'>Meeting with suppliers from kuta</h4>
                    <p className='time'>14:00-15.00</p>
                    <p className='time'> at Karnataka,India</p>
                </div>
                <div className='last2'>
                    <h4 className='Meeting'>Check operation at Giga Factory</h4>
                    <p className='time'>14:00-15.00</p>
                    <p className='time'> at Banglore</p>
                </div>
            </div>


        </div>
    </div>
  )
}
