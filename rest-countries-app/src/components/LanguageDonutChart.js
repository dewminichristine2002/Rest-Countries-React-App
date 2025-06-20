import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

const LanguageDonutChart = ({ countries }) => {
  const languageCounts = {}

  countries.forEach((country) => {
    country.languages?.forEach((lang) => {
      languageCounts[lang.name] = (languageCounts[lang.name] || 0) + 1
    })
  })

  const topLanguages = Object.entries(languageCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)

  const labels = topLanguages.map(([name]) => name)
  const values = topLanguages.map(([, count]) => count)

  const chartColors = [
    "#14b8a6", "#ec4899", "#f59e0b", "#6366f1", "#3b82f6",
    "#22c55e", "#ef4444", "#f472b6", "#8b5cf6", "#eab308"
  ]

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
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] ring-1 ring-emerald-500/30">
      <h2 className="text-xl font-bold text-emerald-400 mb-4">Top 10 Languages</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-2/3 h-[250px]">
          <Doughnut data={data} options={{ plugins: { legend: { display: false } } }} />
        </div>
        <div className="w-full lg:w-1/3 text-sm space-y-2">
          {labels.map((language, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: chartColors[idx % chartColors.length] }} />
              <span className="text-slate-300">{language}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageDonutChart
