import React, { useEffect, useState } from "react"
import axios from "axios"
import PopulationChart from "../components/PopulationChart"
import RegionPieChart from "../components/RegionPieChart"
import RegionBarChart from "../components/RegionBarChart"
import LanguageDonutChart from "../components/LanguageDonutChart"

const StatisticsPage = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v2/all")
        setCountries(res.data)
      } catch (error) {
        console.error("Failed to fetch countries", error)
      }
    }
    fetchCountries()
  }, [])

  return (
<div className="max-w-7xl mx-auto px-4 py-10">
  <h1 className="text-3xl font-bold text-cyan-300 mb-10 text-center">
    Global Country Statistics
  </h1>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">


    <PopulationChart countries={countries} />
    <RegionPieChart countries={countries} />
    <LanguageDonutChart countries={countries} />
    <RegionBarChart countries={countries} />
   
  </div>
</div>


  )
}

export default StatisticsPage
