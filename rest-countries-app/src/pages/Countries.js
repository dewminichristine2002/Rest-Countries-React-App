"use client"

import { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"
import FilterDropdown from "../components/FilterDropdown"
import CountryList from "../components/CountryList"
import { getAllCountries, searchCountriesByName } from "../services/api"

const Home = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [regionFilter, setRegionFilter] = useState("")
  const [languageFilter, setLanguageFilter] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [regions, setRegions] = useState([])
  const [languages, setLanguages] = useState([])

  // Fetch all countries on initial load
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true)
        const data = await getAllCountries()
        setCountries(data)
        setFilteredCountries(data)

        // Extract unique regions
        const uniqueRegions = [...new Set(data.map((country) => country.region))].filter(Boolean)
        setRegions(uniqueRegions)

        // Extract unique languages
        const allLanguages = data.flatMap((country) =>
          country.languages ? country.languages.map((lang) => lang.name) : [],
        )
        const uniqueLanguages = [...new Set(allLanguages)].filter(Boolean)
        setLanguages(uniqueLanguages)

        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  // Filter countries based on search term, region, and language
  useEffect(() => {
    const filterCountries = async () => {
      try {
        setLoading(true)
        let filtered = [...countries]

        // Apply search filter if search term exists
        if (searchTerm.trim()) {
          filtered = await searchCountriesByName(searchTerm)
        }

        // Apply region filter if selected
        if (regionFilter) {
          filtered = filtered.filter((country) => country.region === regionFilter)
        }

        // Apply language filter if selected
        if (languageFilter) {
          filtered = filtered.filter(
            (country) => country.languages && country.languages.some((lang) => lang.name === languageFilter),
          )
        }

        setFilteredCountries(filtered)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    // Debounce search to avoid too many API calls
    const timeoutId = setTimeout(() => {
      filterCountries()
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [searchTerm, regionFilter, languageFilter, countries])

  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="flex space-x-4">
          <FilterDropdown options={regions} value={regionFilter} onChange={setRegionFilter} label="Filter by Region" />
          <FilterDropdown
            options={languages}
            value={languageFilter}
            onChange={setLanguageFilter}
            label="Filter by Language"
          />
        </div>
      </div>
      <CountryList countries={filteredCountries} loading={loading} error={error} />
    </div>
  )
}

export default Home
