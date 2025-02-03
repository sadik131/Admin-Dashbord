import React from 'react'
import ChartLayout from '../share/ChartLayout'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { userGrowthData } from '../../const'

function UserGrowthChart() {
    return (
        <div>
            <ChartLayout title="User Growth">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart height="100%" width="100%" data={userGrowthData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                        <XAxis dataKey="month" stroke='#9CA3AF' />
                        <YAxis stroke='#9CA3AF' />
                        <Tooltip contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                        }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Line type="monotone" dataKey="users" dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }} stroke="#8B5CF6" activeDot={{ r: 8 }} />
                    </LineChart>

                </ResponsiveContainer>
            </ChartLayout></div>
    )
}

export default UserGrowthChart