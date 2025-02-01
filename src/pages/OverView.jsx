import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import Header from '../components/share/Header'
import StartCard from "../components/share/StartCard";
import { motion } from "motion/react";
import CategoryDistributionChart from "../components/overView/CategoryDistributionChart";
import SalesChannelChart from "../components/overView/SalesChannelChart";
import SalesOverviewChart from "../components/overView/SalsOverViewCharts";

function OverViewPage() {
  return (
    <div className='flex-1 overflow-auto'>
      <Header title="OverView" />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div>
          {/* grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
            <StartCard name='Total Sales' icon={Zap} value='$12,345' color='#6366F1' />
            <StartCard name='New Users' icon={Users} value='1,234' color='#8B5CF6' />
            <StartCard name='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
            <StartCard name='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' />
          </motion.div>
        </div>
        {/* charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <SalesOverviewChart title="Salse OverView" />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  )
}

export default OverViewPage