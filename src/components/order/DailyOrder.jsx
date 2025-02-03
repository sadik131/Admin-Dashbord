import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { dailyOrdersData } from '../../const';
import ChartLayout from '../share/ChartLayout';

function DailyOrder() {
    return (
        <ChartLayout title="Daily Orders">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart height="100%" width="100%" data={dailyOrdersData}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
                    <XAxis dataKey="date" stroke='#9ca3af' />
                    <YAxis />
                    <Tooltip contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColor: "#4B5563",
                    }}
                        itemStyle={{ color: "#E5E7EB" }}
                    />
                    <Line type='monotone' dataKey='orders' stroke='#8B5CF6' strokeWidth={2} />

                    <Legend />
                </LineChart>

            </ResponsiveContainer>
        </ChartLayout>
    )
}

export default DailyOrder
