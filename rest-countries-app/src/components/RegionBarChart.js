import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const RegionBarChart = ({ countries }) => {
  const regionCounts = countries.reduce((acc, country) => {
    const region = country.region || "Unknown"
    acc[region] = (acc[region] || 0) + 1
    return acc
  }, {})

  const data = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        label: "Number of Countries",
        data: Object.values(regionCounts),
        backgroundColor: "#22d3ee",
        borderRadius: 6,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { color: "#22d3ee" },
        grid: { color: "#334155" },
      },
      y: {
        ticks: { color: "#22d3ee" },
        grid: { color: "#1e293b" },
      },
    },
  }

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-cyan-300 mb-4">Number of Countries per Region</h2>
      <div className="h-[300px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default RegionBarChart
