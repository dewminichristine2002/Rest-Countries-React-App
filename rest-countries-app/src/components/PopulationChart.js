import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const PopulationChart = ({ countries }) => {
  const topCountries = [...countries]
    .sort((a, b) => b.population - a.population)
    .slice(0, 10)

  const data = {
    labels: topCountries.map((c) => c.name),
    datasets: [
      {
        label: "Population",
        data: topCountries.map((c) => c.population),
        backgroundColor: "#a855f7", // switch to violet for pop
        borderRadius: 6,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { color: "#a855f7" },
        grid: { color: "#334155" },
      },
      y: {
        ticks: { color: "#a855f7" },
        grid: { color: "#1e293b" },
      },
    },
  }

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-[0_0_20px_rgba(168,85,247,0.3)] p-6 rounded-xl">
      <h2 className="text-xl font-bold text-violet-400 mb-4">Top 10 Most Populous Countries</h2>
      <div className="h-[450px] sm:h-[350px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default PopulationChart
