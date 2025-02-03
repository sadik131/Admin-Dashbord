import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import OverViewPage from "./pages/OverView"
import ProductPage from "./pages/Product"
import UserPage from "./pages/UserPage"
import SalesPage from "./pages/SalesPage"
import OrdersPage from "./pages/OrdersPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import SettingsPages from "./pages/SettingsPages"

function App() {

  return (
    <>
      <div className="h-screen w-full fixed bg-gray-800 text-gray-100 overflow-hidden">
        {/* BG */}
        <div className="fixed inset-0 -z-10">

          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 opacity-80 -z-10" />
          <div className="absolute inset-0 backdrop-blur-sm -z-10" />
        </div>
        <div />
        <div className="flex h-full">
          <Sidebar />
          <Routes>
            <Route path="/" element={<OverViewPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/Settings" element={<SettingsPages />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
