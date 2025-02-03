import React, { useState } from 'react'
import { Edit, Search, Trash } from 'lucide-react'
import { motion } from 'framer-motion'
import { userData } from '../../const'

function UsersTable() {

    const [filterUser, setFilterUser] = useState(userData)
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        const value = e.target.value;
        const turm = value.toLowerCase();
        setSearch(turm)
        if (turm === "") {
            setFilterUser(userData)
            return
        }
        const filter = filterUser.filter(user => {
            return user.name.toLowerCase().includes(turm) || user.category.toLowerCase().includes(turm)
        })
        setFilterUser(filter)
    }

    return (
        <div className="overflow-x-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='bg-gray-800/50 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden p-4 border border-gray-700 mb-8'>
            <div className="flex items-center justify-between mb-4">
                <h1 className='text-xl font-semibold text-gray-100'>Product List</h1>
                <div className='relative'>
                    <input onChange={(e) => handleSearch(e)} value={search} type="text" placeholder='Search...' className='bg-gray-700 text-gray-100 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <Search size={20} color='#9CA3AF' className='absolute left-3 top-1/2 transform -translate-y-1/2' />
                </div>
            </div>
            {/* tables */}
            <table className='min-w-full divide-y divide-gray-700'>
                <thead>
                    <tr>
                        <td className='px-6 py-6 text-left text-sm font-medium text-gray-400 tracking-wider'>NAME</td>
                        <td className='px-6 py-6 text-left text-sm font-medium text-gray-400 tracking-wider'>Email</td>
                        <td className='px-6 py-6 text-left text-sm font-medium text-gray-400 tracking-wider'>Role</td>
                        
                        <td className='px-6 py-6 text-left text-sm font-medium text-gray-400 tracking-wider'>SALES</td>
                        <td className='px-6 py-6 text-left text-sm font-medium text-gray-400 tracking-wider'>ACTIVE</td>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-700'>
                    {filterUser.map(user => (
                        <tr key={user.id} className='bg-gray-800 hover:bg-gray-700/50'>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100 flex gap-2 items-center'>
                                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-lg font-semibold">{user.name.charAt(0)}</div>
                                {user.name}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>{user.email}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
                                <span className='bg-blue-800 rounded-full leading-4 px-2 text-xs '>{user.role}</span>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
                                <span className={`${user.status === "Active" ?"bg-green-800":"bg-red-800"} px-2 rounded-full text-xs leading-5`}>{user.status}</span>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
                                <button className='mr-2 text-indigo-400 hover:text-indigo-500'><Edit size={18} /></button>
                                <button className='text-red-400 hover:text-red-500'><Trash size={18} /> </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
        </div>
    )
}

export default UsersTable