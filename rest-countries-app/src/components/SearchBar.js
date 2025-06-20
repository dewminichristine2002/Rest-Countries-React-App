"use client"

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border border-neon-blue bg-dark-card text-white rounded-md shadow focus:outline-none focus:ring-2 focus:ring-neon-blue"

      />
    </div>
  )
}

export default SearchBar
