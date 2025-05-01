import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getCountryByCode } from "../services/api"

const CountryDetail = () => {
  const { countryCode } = useParams()
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [borderCountries, setBorderCountries] = useState([])

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        setLoading(true)
        const data = await getCountryByCode(countryCode)
        setCountry(data)

        // Fetch border countries if they exist
        if (data.borders && data.borders.length > 0) {
          const borderPromises = data.borders.map((border) => getCountryByCode(border))
          const borderData = await Promise.all(borderPromises)
          setBorderCountries(borderData)
        }

        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchCountryDetails()
  }, [countryCode])

  if (loading) {
    return <div className="text-center py-8">Loading country details...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>
  }

  if (!country) {
    return <div className="text-center py-8">Country not found.</div>
  }

  return (
    <div>
      <Link to="/" className="inline-block mb-8 px-6 py-2 bg-white shadow-md rounded-md hover:bg-gray-100">
        &larr; Back to All Countries
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={country.flags.png || "/placeholder.svg"}
            alt={`Flag of ${country.name}`}
            className="w-full shadow-md"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-6">{country.name}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="mb-2">
                <span className="font-semibold">Native Name:</span> {country.nativeName}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Sub Region:</span> {country.subregion}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Capital:</span> {country.capital}
              </p>
            </div>

            <div>
              <p className="mb-2">
                <span className="font-semibold">Top Level Domain:</span> {country.topLevelDomain?.join(", ")}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Currencies:</span>{" "}
                {country.currencies?.map((currency) => currency.name).join(", ")}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Languages:</span>{" "}
                {country.languages?.map((language) => language.name).join(", ")}
              </p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Border Countries:</h2>
              <div className="flex flex-wrap gap-2">
                {borderCountries.map((border) => (
                  <Link
                    key={border.alpha3Code}
                    to={`/country/${border.alpha3Code}`}
                    className="px-4 py-1 bg-white shadow-sm rounded-sm hover:bg-gray-100"
                  >
                    {border.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountryDetail
