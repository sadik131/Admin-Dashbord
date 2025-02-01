import { motion } from 'motion/react'

function StartCard({ name, icon: Icon, value, color }) {
    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
            className='bg-gray-800/50 backdrop-blur-sm shadow-lg rounded-lg border border-gray-700 overflow-hidden'>
            <div className="px-4 py-5 sm:p-6">
                <span className='flex items-center text-sm font-medium text-gray-400'>
                    <Icon size={24} color={color} className="mr-2" />
                    {name}
                </span>
                <p className='text-3xl mt-1 font-semibold text-gray-100'>{value}</p>
            </div>
        </motion.div>
    )
}

export default StartCard