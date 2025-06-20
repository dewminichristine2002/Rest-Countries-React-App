import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const { register } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]")
    if (users.some((user) => user.username === username)) {
      setError("Username already exists")
      return
    }

    const newUser = { username, email, password }
    register(newUser)
    navigate("/login")
  }

  return (
    <div className="flex justify-center items-center h-[92vh] bg-[#0D0F14] text-white">
      <div className="bg-[#111827] bg-opacity-80 backdrop-blur-md shadow-lg rounded-2xl p-8 w-full max-w-md border border-blue-500/30"
        style={{ boxShadow: "0 0 20px rgba(0, 136, 255, 0.2)" }}>
        
        <h1 className="text-center text-2xl font-semibold text-cyan-400 mb-6 tracking-wide">
          Register
        </h1>

        {error && (
          <div className="bg-red-800 bg-opacity-30 border border-red-500 text-red-300 px-4 py-2 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold text-gray-300 mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              className="w-full px-3 py-2 text-sm rounded-md bg-[#1F2937] text-white placeholder-gray-500 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm rounded-md bg-[#1F2937] text-white placeholder-gray-500 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-3 py-2 text-sm rounded-md bg-[#1F2937] text-white placeholder-gray-500 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-3 py-2 text-sm rounded-md bg-[#1F2937] text-white placeholder-gray-500 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-white text-sm py-2 rounded-md hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-md"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
