import React from 'react'
import ChartLayout from '../share/ChartLayout'
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { COLORS, userActivityData } from '../../const'

function UserActivityHeatmap() {
    return (
        <ChartLayout title='User Activity Heatmap'>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart width={"100%"} height={"100%"} data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke='#4B5563' />
                    <XAxis dataKey="name" stroke='#9CA3AF' />
                    <YAxis stroke='#9CA3AF' />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                        }}
                        itemStyle={{ color: "#E5E7EB" }} />
                    <Legend />
                    <Bar dataKey='0-4' stackId='a' fill='#6366F1' />
						<Bar dataKey='4-8' stackId='a' fill='#8B5CF6' />
						<Bar dataKey='8-12' stackId='a' fill='#EC4899' />
						<Bar dataKey='12-16' stackId='a' fill='#10B981' />
						<Bar dataKey='16-20' stackId='a' fill='#F59E0B' />
						<Bar dataKey='20-24' stackId='a' fill='#3B82F6' />
                </BarChart>
            </ResponsiveContainer>
        </ChartLayout>
    )
}

export default UserActivityHeatmap