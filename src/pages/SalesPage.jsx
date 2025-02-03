import React from 'react'
import { motion } from 'framer-motion'
import StartCard from '../components/share/StartCard'
import { CreditCard, DollarSign,  ShoppingCart, TrendingUp} from 'lucide-react'
import Header from '../components/share/Header'
import { salesStats } from '../const'
import SalesOverviewChart from '../components/Sales/SalesOverviewChart'
import DailySalesTrend from '../components/Sales/DailySalesTrend'
import SalesByCategoryChart from '../components/Sales/SalesByCategoryChart'

function SalesPage() {
    return (
        <div className='flex-1 overflow-auto'>
            <Header title="Sales Dashboard" />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* start Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
                    <StartCard name='Total Revenue' icon={DollarSign} value={salesStats.totalRevenue} color='#6366F1' />
                    <StartCard name='Avg. Order Value' icon={ShoppingCart} value={salesStats.averageOrderValue} color='#10B981' />
                    <StartCard name='Conversion Rate' icon={TrendingUp} value={salesStats.conversionRate} color='#F59E0B' />
                    <StartCard name='Sales Growth' icon={CreditCard} value={salesStats.salesGrowth} color='#EF4444' />
                </motion.div>

                {/* sales over view */}
                <SalesOverviewChart />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    <SalesByCategoryChart />
                    <DailySalesTrend />
                </div>

            </main>
        </div>
    )
}

export default SalesPage