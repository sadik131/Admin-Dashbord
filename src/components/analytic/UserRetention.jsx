import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import { userRetentionData } from '../../const';
import ChartLayout from '../share/ChartLayout';

function UserRetention() {
  return (
    <ChartLayout title="User Retention">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart height="100%" width="100%" data={userRetentionData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
            <XAxis dataKey="name" stroke='#9ca3af' />
            <YAxis />
            <Tooltip contentStyle={{
              backgroundColor: "rgba(31, 41, 55, 0.8)",
              borderColor: "#4B5563",
            }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line type="monotone" dataKey="retention" stroke='#8B5CF6' strokeWidth={2} />
          </LineChart>

        </ResponsiveContainer>
    </ChartLayout>
  )
}

export default UserRetention