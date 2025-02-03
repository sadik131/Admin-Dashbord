import {BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users, Eye } from "lucide-react";


export const SIDEBAR_ITEMS = [
	{
		name: "Overview",
		icon: BarChart2,
		color: "#6366f1",
		href: "/",
	},
	{ name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

export const salesData = [
	{ name: "Jul", sales: 4200 },
	{ name: "Aug", sales: 3800 },
	{ name: "Sep", sales: 5100 },
	{ name: "Oct", sales: 4600 },
	{ name: "Nov", sales: 5400 },
	{ name: "Dec", sales: 7200 },
	{ name: "Jan", sales: 6100 },
	{ name: "Feb", sales: 5900 },
	{ name: "Mar", sales: 6800 },
	{ name: "Apr", sales: 6300 },
	{ name: "May", sales: 7100 },
	{ name: "Jun", sales: 7500 },
];

export const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

export const SALES_CHANNEL_DATA = [
	{ name: "Website", value: 45600 },
	{ name: "Mobile App", value: 38200 },
	{ name: "Marketplace", value: 29800 },
	{ name: "Social Media", value: 18700 },
];

export const categoryData = [
	{ name: "Electronics", value: 4500 },
	{ name: "Clothing", value: 3200 },
	{ name: "Home & Garden", value: 2800 },
	{ name: "Books", value: 2100 },
	{ name: "Sports & Outdoors", value: 1900 },
];

export const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];

export const userStats = {
	totalUsers: 152845,
	newUsersToday: 243,
	activeUsers: 98520,
	churnRate: "2.4%",
};

export const userData = [
	{ id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
	{ id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
];

export const userGrowthData = [
	{ month: "Jan", users: 1000 },
	{ month: "Feb", users: 1500 },
	{ month: "Mar", users: 2000 },
	{ month: "Apr", users: 3000 },
	{ month: "May", users: 4000 },
	{ month: "Jun", users: 5000 },
];

export const userActivityData = [
	{ name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
	{ name: "Tue", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
	{ name: "Wed", "0-4": 40, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 50 },
	{ name: "Thu", "0-4": 50, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 60 },
	{ name: "Fri", "0-4": 60, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 70 },
	{ name: "Sat", "0-4": 70, "4-8": 90, "8-12": 110, "12-16": 130, "16-20": 150, "20-24": 80 },
	{ name: "Sun", "0-4": 80, "4-8": 100, "8-12": 120, "12-16": 140, "16-20": 160, "20-24": 90 },
];

export const userDemographicsData = [
	{ name: "18-24", value: 20 },
	{ name: "25-34", value: 30 },
	{ name: "35-44", value: 25 },
	{ name: "45-54", value: 15 },
	{ name: "55+", value: 10 },
];

export const salesStats = {
	totalRevenue: "$1,234,567",
	averageOrderValue: "$78.90",
	conversionRate: "3.45%",
	salesGrowth: "12.3%",
};

export const monthlySalesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
	{ month: "Jul", sales: 7000 },
];

export const salesByCategory = [
	{ name: "Electronics", value: 400 },
	{ name: "Clothing", value: 300 },
	{ name: "Home & Garden", value: 200 },
	{ name: "Books", value: 100 },
	{ name: "Others", value: 150 },
];

export const dailySalesData = [
	{ name: "Mon", sales: 1000 },
	{ name: "Tue", sales: 1200 },
	{ name: "Wed", sales: 900 },
	{ name: "Thu", sales: 1100 },
	{ name: "Fri", sales: 1300 },
	{ name: "Sat", sales: 1600 },
	{ name: "Sun", sales: 1400 },
];

export const orderStats = {
	totalOrders: "1,234",
	pendingOrders: "56",
	completedOrders: "1,178",
	totalRevenue: "$98,765",
};

export const dailyOrdersData = [
	{ date: "07/01", orders: 45 },
	{ date: "07/02", orders: 52 },
	{ date: "07/03", orders: 49 },
	{ date: "07/04", orders: 60 },
	{ date: "07/05", orders: 55 },
	{ date: "07/06", orders: 58 },
	{ date: "07/07", orders: 62 },
];

export const orderStatusData = [
	{ name: "Pending", value: 30 },
	{ name: "Processing", value: 45 },
	{ name: "Shipped", value: 60 },
	{ name: "Delivered", value: 120 },
];

export const orderData = [
	{ id: "ORD001", customer: "John Doe", total: 235.4, status: "Delivered", date: "2023-07-01" },
	{ id: "ORD002", customer: "Jane Smith", total: 412.0, status: "Processing", date: "2023-07-02" },
	{ id: "ORD003", customer: "Bob Johnson", total: 162.5, status: "Shipped", date: "2023-07-03" },
	{ id: "ORD004", customer: "Alice Brown", total: 750.2, status: "Pending", date: "2023-07-04" },
	{ id: "ORD005", customer: "Charlie Wilson", total: 95.8, status: "Delivered", date: "2023-07-05" },
	{ id: "ORD006", customer: "Eva Martinez", total: 310.75, status: "Processing", date: "2023-07-06" },
	{ id: "ORD007", customer: "David Lee", total: 528.9, status: "Shipped", date: "2023-07-07" },
	{ id: "ORD008", customer: "Grace Taylor", total: 189.6, status: "Delivered", date: "2023-07-08" },
];

export const socialMedia =[
	{
		id: 1,
		name: "Google",
		connected: true,
		icon: "/google.png",
	},
	{
		id: 2,
		name: "Facebook",
		connected: false,
		icon: "/facebook.svg",
	},
	{
		id: 3,
		name: "Twitter",
		connected: true,
		icon: "/x.png",
	},
] 

export const overviewData = [
	{ name: "Revenue", value: "$1,234,567", change: 12.5, icon: DollarSign },
	{ name: "Users", value: "45,678", change: 8.3, icon: Users },
	{ name: "Orders", value: "9,876", change: -3.2, icon: ShoppingBag },
	{ name: "Page Views", value: "1,234,567", change: 15.7, icon: Eye },
];

export const revenueData = [
	{ month: "Jan", revenue: 4000, target: 3800 },
	{ month: "Feb", revenue: 3000, target: 3200 },
	{ month: "Mar", revenue: 5000, target: 4500 },
	{ month: "Apr", revenue: 4500, target: 4200 },
	{ month: "May", revenue: 6000, target: 5500 },
	{ month: "Jun", revenue: 5500, target: 5800 },
	{ month: "Jul", revenue: 7000, target: 6500 },
];

export const channelData = [
	{ name: "Organic Search", value: 4000 },
	{ name: "Paid Search", value: 3000 },
	{ name: "Direct", value: 2000 },
	{ name: "Social Media", value: 2780 },
	{ name: "Referral", value: 1890 },
	{ name: "Email", value: 2390 },
];

export const productPerformanceData = [
	{ name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
	{ name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
	{ name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
	{ name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
	{ name: "Product E", sales: 1890, revenue: 4800, profit: 2181 },
];

export const userRetentionData = [
	{ name: "Week 1", retention: 100 },
	{ name: "Week 2", retention: 75 },
	{ name: "Week 3", retention: 60 },
	{ name: "Week 4", retention: 50 },
	{ name: "Week 5", retention: 45 },
	{ name: "Week 6", retention: 40 },
	{ name: "Week 7", retention: 38 },
	{ name: "Week 8", retention: 35 },
];

export const INSIGHTS = [
	{
		icon: TrendingUp,
		color: "text-green-500",
		insight: "Revenue is up 15% compared to last month, driven primarily by a successful email campaign.",
	},
	{
		icon: Users,
		color: "text-blue-500",
		insight: "Customer retention has improved by 8% following the launch of the new loyalty program.",
	},
	{
		icon: ShoppingBag,
		color: "text-purple-500",
		insight: 'Product category "Electronics" shows the highest growth potential based on recent market trends.',
	},
	{
		icon: DollarSign,
		color: "text-yellow-500",
		insight: "Optimizing pricing strategy could potentially increase overall profit margins by 5-7%.",
	},
];