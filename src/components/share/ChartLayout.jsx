import React from 'react'
import { motion } from 'framer-motion'

function ChartLayout({ children, title, classes }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={'bg-gray-800 border border-gray-700 rounded-lg p-4 ' + classes}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>{title}</h2>
            <div className="h-80">
                {children}
            </div>
        </motion.div>
    )
}

export default ChartLayout