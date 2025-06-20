import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import VanillaTilt from "vanilla-tilt"

const CountryCard = ({ country }) => {
  const tiltRef = useRef()

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.05,
      })
    }
  }, [])

  return (
    <Link to={`/country/${country.alpha3Code}`} className="block">
      <div
        ref={tiltRef}
        className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(0,255,255,0.2)] transition-all duration-500 ease-in-out"
      >
        <div className="h-40 overflow-hidden">
          <img
            src={country.flags.png || "/placeholder.svg"}
            alt={`Flag of ${country.name}`}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-out"
          />
        </div>
        <div className="p-4 text-white">
          <h2 className="text-xl font-bold text-neon-blue mb-2">{country.name}</h2>
          <p className="text-sm text-slate-300">
            <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CountryCard
