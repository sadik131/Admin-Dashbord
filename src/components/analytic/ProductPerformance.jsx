import { Bar, BarChart, CartesianGrid, Cell, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import ChartLayout from '../share/ChartLayout'
import { productPerformanceData } from '../../const'

function ProductPerformance() {
    return (
        <ChartLayout title='Product Performance'>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart width={"100%"} height={"100%"} data={productPerformanceData}>
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
                    <Bar dataKey='sales' fill='#8B5CF6' />
						<Bar dataKey='revenue' fill='#10B981' />
						<Bar dataKey='profit' fill='#F59E0B' />
                </BarChart>
            </ResponsiveContainer>
        </ChartLayout>
    )
}

export default ProductPerformance