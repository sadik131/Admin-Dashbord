import { Bar, BarChart, CartesianGrid, Cell, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import ChartLayout from '../share/ChartLayout'
import { COLORS, SALES_CHANNEL_DATA } from '../../const'

function SalesChannelChart() {
  return (
    <ChartLayout classes="lg:col-span-2" title='Sales By Channel'>
      <ResponsiveContainer width='100%' height='100%'>
      <BarChart width={"100%"} height={"100%"} data={SALES_CHANNEL_DATA}>
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
        <Bar dataKey={"value"} fill='#8884d8'>
							{SALES_CHANNEL_DATA.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Bar>
      </BarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}

export default SalesChannelChart