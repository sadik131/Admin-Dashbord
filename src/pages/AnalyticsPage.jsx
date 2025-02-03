import React from 'react'
import Header from '../components/share/Header'
import OverviewCards from '../components/analytic/OverviewCards'
import RevenueChart from '../components/analytic/RevenueChart'
import ProductPerformance from '../components/analytic/ProductPerformance'
import ChannelPerformance from '../components/analytic/ChannelPerformance'
import UserRetention from '../components/analytic/UserRetention'
import CustomerSegmentation from '../components/analytic/CustomerSegmentation'
import AIPoweredInsights from '../components/analytic/AIPoweredInsights'

function AnalyticsPage() {
    return (
        <div className='flex-1 overflow-auto'>
            <Header title="Analytics Dashboard" />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <OverviewCards />
                <RevenueChart />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                <ChannelPerformance />
                <ProductPerformance />
                <UserRetention />
                <CustomerSegmentation /> 
            </div>

            <AIPoweredInsights />
            </main>
        </div>
    )
}

export default AnalyticsPage