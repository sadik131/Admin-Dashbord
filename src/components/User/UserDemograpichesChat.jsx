import React from 'react'
import { COLORS, userDemographicsData } from '../../const'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import ChartLayout from '../share/ChartLayout'
import { div } from 'motion/react-client'

function UserDemograpichesChat() {
    return (
        <div className='col-span-2'>
            <ChartLayout title="User Demographics">
            <ResponsiveContainer>
					<PieChart>
						<Pie
							data={userDemographicsData}
							cx='50%'
							cy='50%'
                            labelLine={true}
							outerRadius={100}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{userDemographicsData.map((entry, index) => (
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
            {/* <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={userDemographicsData}
                        cx={"50%"}
                        cy={"50%"}
                        labelLine={false}
                        outerRadius={80}
                        fill='#8884d8'
                        dataKey='value'
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {userDemographicsData.map((entry, index) => (
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
            </ResponsiveContainer> */}
        </ChartLayout>
        </div>
    )
}

export default UserDemograpichesChat