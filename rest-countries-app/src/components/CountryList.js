import CountryCard from "./CountryCard"

const CountryList = ({ countries, loading, error }) => {
  if (loading) {
    return <div className="text-center py-8">Loading countries...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>
  }

  if (countries.length === 0) {
    return <div className="text-center py-8">No countries found matching your criteria.</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {countries.map((country) => (
        <CountryCard key={country.alpha3Code} country={country} />
      ))}
    </div>
  )
}

export default CountryList
