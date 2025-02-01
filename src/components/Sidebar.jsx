import { Menu } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'
import { SIDEBAR_ITEMS } from '../const'
import { Link } from 'react-router-dom'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <motion.div
      className={`${isOpen ? "w-64" : "w-20"} h-full relative z-10 transition-all duration-300 ease-in-out shrink-0`}
      animate={{ width: isOpen ? "256" : "80" }}
    >
      <motion.div
        className={`h-full bg-gray-800 backdrop-blur-sm p-4 flex flex-col border-r border-gray-700`}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)} className="p-2 w-fit hover:bg-gray-700 rounded-full flex items-center justify-center">
          <Menu size={26} />
        </motion.button>
        {/* links */}
        <nav className='mt-8 grow'>
          {SIDEBAR_ITEMS.map(item => (
            <Link
              key={item.href}
              to={item.href}
            >
              <motion.div className='flex items-center hover:bg-gray-700 p-4 rounded-lg mb-2 transition-colors font-medium text-sm '>
                <item.icon size={24} style={{ color: item.color, flexShrink: 0, maxWidth: "24px" }} />
                <AnimatePresence>
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className='ml-4 whitespace-nowrap'>{item.name}</motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.div>
  )
}

export default Sidebar