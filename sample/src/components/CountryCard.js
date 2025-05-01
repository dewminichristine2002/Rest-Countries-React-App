import { Link } from "react-router-dom"

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.alpha3Code}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="h-40 overflow-hidden">
          <img
            src={country.flags.png || "/placeholder.svg"}
            alt={`Flag of ${country.name}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{country.name}</h2>
          <p>
            <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CountryCard
