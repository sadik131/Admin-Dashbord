import { motion } from 'framer-motion';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { monthlySalesData } from '../../const';

function SalesOverviewChart() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className={'bg-gray-800 border border-gray-700 rounded-lg p-4 '}
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className='text-lg font-medium  text-gray-100'>Sales Overview
                    </h2>
                    <select className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 
          focus:ring-blue-500'>
                        <option>This Week</option>
                        <option>This Month</option>
                        <option>This Quarter</option>
                        <option>This Year</option>
                    </select>
                </div>

                <div className="h-80">
                    <ResponsiveContainer>
                        <AreaChart data={monthlySalesData}>
                            <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                            <XAxis dataKey='month' stroke='#9CA3AF' />
                            <YAxis stroke='#9CA3AF' />
                            <Tooltip
                                contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
                                itemStyle={{ color: "#E5E7EB" }}
                            />
                            <Area type='monotone' dataKey='sales' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>

        </>
    )
}

export default SalesOverviewChart