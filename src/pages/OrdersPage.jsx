import { motion } from 'framer-motion'
import Header from '../components/share/Header'
import StartCard from '../components/share/StartCard'
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react'
import { orderStats } from '../const'
import DailyOrder from '../components/order/DailyOrder'
import OrderDistribution from '../components/order/OrderDistribution'
import OrderList from '../components/order/OrderList'

function OrdersPage() {
    return (
        <div className='flex-1 overflow-auto'>
            <Header title="Orders" />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
                    <StartCard Total='Orders' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
                    <StartCard name='Pending Orders' icon={Clock} value={orderStats.pendingOrders} color='#F59E0B' />
                    <StartCard name='Completed Orders' icon={CheckCircle} value={orderStats.completedOrders} color='#10B981' />
                    <StartCard name='Total Revenue' icon={DollarSign} value={orderStats.totalRevenue} color='#EF4444' />
                </motion.div>

                {/* charts  */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <DailyOrder />
                    <OrderDistribution />
                </div>
                <OrderList />

            </main>
        </div>
    )
}

export default OrdersPage