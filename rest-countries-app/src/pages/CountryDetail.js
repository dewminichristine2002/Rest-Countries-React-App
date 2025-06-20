import { useState, useEffect, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import VanillaTilt from "vanilla-tilt"
import { getCountryByCode } from "../services/api"

const CountryDetail = () => {
  const { countryCode } = useParams()
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [borderCountries, setBorderCountries] = useState([])

  const tiltRef = useRef()

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        setLoading(true)
        const data = await getCountryByCode(countryCode)
        setCountry(data)

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

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.03,
      })
    }
  }, [])

  if (loading) return <div className="text-center py-8 text-white">Loading country details...</div>
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>
  if (!country) return <div className="text-center py-8 text-white">Country not found.</div>

  return (
    <div className="text-white">
      <Link
        to="/countries"
        className="inline-block mb-8 px-6 py-2 rounded-lg bg-[#0f172a] border border-neon-blue text-neon-blue shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:bg-[#112240] transition-all"
      >
        &larr; Back to All Countries
      </Link>

      <div
        ref={tiltRef}
        className="p-8 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={country.flags.png || "/placeholder.svg"}
              alt={`Flag of ${country.name}`}
              className="w-full rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.2)]"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-neon-blue mb-6">{country.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-slate-300">
              <div>
                <p className="mb-2"><span className="font-semibold text-white">Native Name:</span> {country.nativeName}</p>
                <p className="mb-2"><span className="font-semibold text-white">Population:</span> {country.population.toLocaleString()}</p>
                <p className="mb-2"><span className="font-semibold text-white">Region:</span> {country.region}</p>
                <p className="mb-2"><span className="font-semibold text-white">Sub Region:</span> {country.subregion}</p>
                <p className="mb-2"><span className="font-semibold text-white">Capital:</span> {country.capital}</p>
              </div>

              <div>
                <p className="mb-2"><span className="font-semibold text-white">Top Level Domain:</span> {country.topLevelDomain?.join(", ")}</p>
                <p className="mb-2"><span className="font-semibold text-white">Currencies:</span> {country.currencies?.map((currency) => currency.name).join(", ")}</p>
                <p className="mb-2"><span className="font-semibold text-white">Languages:</span> {country.languages?.map((language) => language.name).join(", ")}</p>
              </div>
            </div>

            {borderCountries.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-neon-blue mb-4">Border Countries:</h2>
                <div className="flex flex-wrap gap-2">
                  {borderCountries.map((border) => (
                    <Link
                      key={border.alpha3Code}
                      to={`/country/${border.alpha3Code}`}
                      className="px-4 py-1 bg-[#0f172a] text-neon-blue border border-neon-blue rounded-md shadow hover:shadow-[0_0_12px_rgba(0,255,255,0.3)] transition"
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
    </div>
  )
}

export default CountryDetail
