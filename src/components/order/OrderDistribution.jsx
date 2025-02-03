import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import ChartLayout from "../share/ChartLayout"
import { COLORS, orderStatusData } from "../../const"

function OrderDistribution() {
    return (
        <ChartLayout title="Order Status Distribution">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={orderStatusData}
                        cx={"50%"}
                        cy={"50%"}
                        labelLine={true}
                        outerRadius={80}
                        fill='#8884d8'
                        dataKey='value'
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {orderStatusData.map((entry, index) => (
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

export default OrderDistribution