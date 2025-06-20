import { useState, useContext } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { Globe2, Menu, X } from "lucide-react"

const Header = () => {
  const { isAuthenticated, logout, user } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  const linkClass = (path) =>
    location.pathname === path
      ? "text-cyan-300 font-semibold"
      : "text-white hover:text-cyan-300 transition"

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Top Row: Logo + Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-white hover:text-cyan-300 transition"
          >
            <Globe2 size={26} className="text-cyan-300" />
            Countries Explorer
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`w-full md:flex md:items-center md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 bg-gray-900 md:bg-transparent p-4 md:p-0 rounded-md">
            <li><Link to="/" className={linkClass("/")}>Home</Link></li>
            <li><Link to="/countries" className={linkClass("/countries")}>Countries</Link></li>
           

            {isAuthenticated ? (
              <>
                <li className="text-gray-400">Hi, {user?.username}</li>
                <li>
                  <button onClick={handleLogout} className="hover:text-cyan-300">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login" className={linkClass("/login")}>Login</Link></li>
                <li><Link to="/register" className={linkClass("/register")}>Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
