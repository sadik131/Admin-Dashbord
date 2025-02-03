import { motion } from "motion/react"
import { overviewData } from "../../const"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

function OverviewCards() {
    return (
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mb-6">
            {overviewData.map((data, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-lg shadow-lg rounded-lg border border-gray-700 p-6"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm font-medium text-gray-400">{data.name}</h3>
                            <h2 className="mt-1 font-semibold text-gray-100 text-xl">{data.value}</h2>
                        </div>
                        <div className={`p-3 rounded-full ${data.change >=0 ? "bg-green-500/40" :"bg-red-500/40"} relative`}>
                            <div className="absolute inset-0 bg-black opacity-20 rounded-full"></div>
                            <data.icon className={`w-6 h-6 ${data.change >=0 ? "text-green-500" :"text-red-500"} relative z-20 `} />
                        </div>
                    </div>
                    <div
						className={`mt-4 flex items-center ${data.change >= 0 ? "text-green-500" : "text-red-500"}`}>
						{data.change >= 0 ? <ArrowUpRight size='20' /> : <ArrowDownRight size='20' />}
						<span className='ml-1 text-sm font-medium'>{Math.abs(data.change)}%</span>
						<span className='ml-2 text-sm text-gray-400'>vs last period</span>
					</div>
                </motion.div>
            ))}
        </div>
    )
}

export default OverviewCards