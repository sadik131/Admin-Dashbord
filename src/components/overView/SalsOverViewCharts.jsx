import { motion } from 'motion/react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { salesData } from '../../const';
import ChartLayout from '../share/ChartLayout';


function SalesOverviewChart({title}) {
  return (
    <ChartLayout title={title}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart height="100%" width="100%" data={salesData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
            <XAxis dataKey="name" stroke='#9ca3af' />
            <YAxis />
            <Tooltip contentStyle={{
              backgroundColor: "rgba(31, 41, 55, 0.8)",
              borderColor: "#4B5563",
            }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line type="monotone" dataKey="sales" dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }} stroke="#8884d8" activeDot={{ r: 8, strokeWidth: 2 }} />
          </LineChart>

        </ResponsiveContainer>
    </ChartLayout>
  )
}

export default SalesOverviewChart