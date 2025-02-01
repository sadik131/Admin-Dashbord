import React, { useState } from 'react'
import { AlertTriangle, DollarSign, Edit, Package, Search, Trash, TrendingUp } from 'lucide-react'
import { PRODUCT_DATA } from '../const'
import { motion } from 'framer-motion'

import SalesOverviewChart from '../components/overView/SalsOverViewCharts'
import CategoryDistributionChart from '../components/overView/CategoryDistributionChart'
import Header from '../components/share/Header'
import StartCard from '../components/share/StartCard'
import img from "../img/product.jpg"

function ProductPage() {
  const [filterProduct, setFilterProduct] = useState(PRODUCT_DATA)
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value;
    const turm = value.toLowerCase();
    setSearch(turm)
    if(turm === "") {
      setFilterProduct(PRODUCT_DATA)
      return
    }
    const filter = filterProduct.filter(product => {
      return product.name.toLowerCase().includes(turm) || product.category.toLowerCase().includes(turm)
    })
    setFilterProduct(filter)
  }

  return (
    <div className='flex-1 overflow-auto'>
      <Header title="Products" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* cards */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8 gap-5">
          <StartCard name='Total Products' icon={Package} value={1234} color='#6366F1' />
          <StartCard name='Top Selling' icon={TrendingUp} value={89} color='#10B981' />
          <StartCard name='Low Stock' icon={AlertTriangle} value={23} color='#F59E0B' />
          <StartCard name='Total Revenue' icon={DollarSign} value={"$543,210"} color='#EF4444' />
        </motion.div>
        {/* table */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay: 0.5 }}
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
                <td className='px-6 py-6 text-left text-sm font-medium text-gray-400 tracking-wider'>CATEGORY</td>
                <td className='px-6 py-6 text-left text-sm font-medium text-gray-400 tracking-wider'>PRICE</td>
                <td className='px-6 py-6 text-left text-sm font-medium text-gray-400 tracking-wider'>STOCK</td>
                <td className='px-6 py-6 text-left text-sm font-medium text-gray-400 tracking-wider'>SALES</td>
                <td className='px-6 py-6 text-left text-sm font-medium text-gray-400 tracking-wider'>ACTIVE</td>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-700'>
              {filterProduct.map(product => (
                <tr key={product.id} className='bg-gray-800 hover:bg-gray-700/50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100 flex gap-2 items-center'>
                    <img src={img} className='size-10 rounded-full mr-2' />
                    {product.name}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>{product.category}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>{product.price}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>{product.stock}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>{product.sales}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
                    <button className='mr-2 text-indigo-400 hover:text-indigo-500'><Edit size={18} /></button>
                    <button className='text-red-400 hover:text-red-500'><Trash size={18} /> </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* charts */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <SalesOverviewChart title="Salse Trand" />
          <CategoryDistributionChart />
        </motion.div>
      </main>
    </div>
  )
}

export default ProductPage