import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

const RegionPieChart = ({ countries }) => {
  const regionCounts = countries.reduce((acc, country) => {
    const region = country.region || "Unknown"
    acc[region] = (acc[region] || 0) + 1
    return acc
  }, {})

  const chartColors = [
    "#0ea5e9", "#22c55e", "#eab308", "#f43f5e", "#8b5cf6",
    "#f97316", "#64748b", "#06b6d4", "#a855f7"
  ]

  const labels = Object.keys(regionCounts)
  const values = Object.values(regionCounts)

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: chartColors,
        borderWidth: 0,
      },
    ],
  }

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] ring-1 ring-violet-500/30">
      <h2 className="text-xl font-bold text-cyan-300 mb-4">Countries by Region</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-2/3 h-[250px]">
          <Pie data={data} options={{ plugins: { legend: { display: false } } }} />
        </div>
        <div className="w-full lg:w-1/3 text-sm space-y-2">
          {labels.map((region, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: chartColors[idx % chartColors.length] }} />
              <span className="text-slate-300">{region}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RegionPieChart
