import React from 'react'
import Header from '../components/share/Header'
import { motion } from 'framer-motion'
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react'
import { userStats } from '../const'
import StartCard from '../components/share/StartCard'
import UsersTable from '../components/User/UsersTable'
import UserDemograpichesChat from '../components/User/UserDemograpichesChat'
import UserGrowthChart from '../components/User/UserGrowthChart'
import UserActivityHeatmap from '../components/User/UserActivityHeatmap'

function UserPage() {
    return (
        <div className='flex-1 overflow-auto'>
            <Header title="Users" />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* start Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-4 mb-8 gap-5">
                        <StartCard
                            name='Total Users'
                            icon={UsersIcon}
                            value={userStats.totalUsers.toLocaleString()}
                            color='#6366F1'
                        />
                        <StartCard name='New Users Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
                        <StartCard
                            name='Active Users'
                            icon={UserCheck}
                            value={userStats.activeUsers.toLocaleString()}
                            color='#F59E0B'
                        />
                        <StartCard name='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />
                    </div>
                </motion.div>
                {/* table */}
                <UsersTable />

                {/* chats */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <UserGrowthChart />
                    <UserActivityHeatmap />
                    <UserDemograpichesChat />
                </div>
            </main>
        </div>
    )
}

export default UserPage