import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, Search } from 'lucide-react'
import { orderData } from '../../const';

function OrderList() {

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(orderData);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = orderData.filter(
            (order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term)
        );
        setFilteredOrders(filtered);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='bg-gray-800/50 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden p-4 border border-gray-700 mb-8'>
            <div className="flex items-center justify-between mb-4">
                <h1 className='text-xl font-semibold text-gray-100'>Order List</h1>
                <div className='relative'>
                    <input onChange={(e) => handleSearch(e)} value={searchTerm} type="text" placeholder='Search...' className='bg-gray-700 text-gray-100 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <Search size={20} color='#9CA3AF' className='absolute left-3 top-1/2 transform -translate-y-1/2' />
                </div>
            </div>
            {/* tables */}
            <table className='min-w-full divide-y divide-gray-700'>
                <thead>
                    <tr>
                        <td className='px-6 py-6 text-left text-sm font-medium uppercase text-gray-400 tracking-wider'>Order ID	</td>
                        <td className='px-6 py-6 text-left text-sm font-medium uppercase text-gray-400 tracking-wider'>Customer</td>
                        <td className='px-6 py-6 text-left text-sm font-medium uppercase text-gray-400 tracking-wider'>Total</td>
                        <td className='px-6 py-6 text-left text-sm font-medium uppercase text-gray-400 tracking-wider'>Status</td>
                        <td className='px-6 py-6 text-left text-sm font-medium uppercase text-gray-400 tracking-wider'>Date</td>
                        <td className='px-6 py-6 text-left text-sm font-medium uppercase text-gray-400 tracking-wider'>ACTIVE</td>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-700'>
                    {filteredOrders.map(product => (
                        <tr key={product.id} className='bg-gray-800 hover:bg-gray-700/50'>
                            <td className='px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-100'>{product.id}</td>
                            <td className='px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-100 flex gap-2 items-center'>
                                {/* <img src={img} className='size-10 rounded-full mr-2' /> */}
                                {product.customer}</td>
                            <td className='px-6 font-semibold py-4 whitespace-nowrap text-sm font-bold text-gray-100'>${product.total}</td>
                                <td className='px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-300'>
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.status === "Delivered"
                                                ? "bg-green-100 text-green-800"
                                                : product.status === "Processing"
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : product.status === "Shipped"
                                                        ? "bg-blue-100 text-blue-800"
                                                        : "bg-red-100 text-red-800"
                                            }`}
                                    >
                                        {product.status}
                                    </span>
                                </td>
                                <td className='px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-100'>{product.date}</td>
                                <td className='px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-100'>
                                    <button className='mr-2 text-indigo-400 hover:text-indigo-500'><Eye size={18} /></button>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div >
    )
}

export default OrderList