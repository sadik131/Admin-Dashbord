import React from 'react'
import ChartLayout from '../share/ChartLayout'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { categoryData, COLORS } from '../../const'

function CategoryDistributionChart() {
	return (
		<ChartLayout title="Category Distribution">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={categoryData}
						cx={"50%"}
						cy={"50%"}
						labelLine={false}
						outerRadius={80}
						fill='#8884d8'
						dataKey='value'
						label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
					>
						{categoryData.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
					<Tooltip
						contentStyle={{
							backgroundColor: "rgba(31, 41, 55, 0.8)",
							borderColor: "#4B5563",
						}}
						itemStyle={{ color: "#E5E7EB" }}
					/>
					<Legend />
				</PieChart>
			</ResponsiveContainer>
		</ChartLayout>
	)
}

export default CategoryDistributionChart