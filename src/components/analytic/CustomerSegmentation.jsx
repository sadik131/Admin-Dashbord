
import {
	ResponsiveContainer,
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend,
	Tooltip,
} from "recharts";
import ChartLayout from "../share/ChartLayout";

const customerSegmentationData = [
	{ subject: "Engagement", A: 120, B: 110, fullMark: 150 },
	{ subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
	{ subject: "Satisfaction", A: 86, B: 130, fullMark: 150 },
	{ subject: "Spend", A: 99, B: 100, fullMark: 150 },
	{ subject: "Frequency", A: 85, B: 90, fullMark: 150 },
	{ subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

const CustomerSegmentation = () => {
	return (
		<ChartLayout title="Customer Segmentation">

			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<RadarChart cx='50%' cy='50%' outerRadius='80%' data={customerSegmentationData}>
						<PolarGrid stroke='#374151' />
						<PolarAngleAxis dataKey='subject' stroke='#9CA3AF' />
						<PolarRadiusAxis angle={30} domain={[0, 150]} stroke='#9CA3AF' />
						<Radar name='Segment A' dataKey='A' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.6} />
						<Radar name='Segment B' dataKey='B' stroke='#10B981' fill='#10B981' fillOpacity={0.6} />
						<Legend />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
					</RadarChart>
				</ResponsiveContainer>
			</div>
        </ChartLayout>
	);
};
export default CustomerSegmentation;
