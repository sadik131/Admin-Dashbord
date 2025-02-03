import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { dailySalesData } from '../../const'
import ChartLayout from '../share/ChartLayout'

function DailySalesTrend() {
    return (
        <ChartLayout title='Daily Sales Trend'>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={dailySalesData}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                    <XAxis dataKey='name' stroke='#9CA3AF' />
                    <YAxis stroke='#9CA3AF' />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                        }}
                        itemStyle={{ color: "#E5E7EB" }}
                    />
                    <Bar dataKey='sales' fill='#10B981' />
                </BarChart>
            </ResponsiveContainer>
        </ChartLayout>
    )
}

export default DailySalesTrend