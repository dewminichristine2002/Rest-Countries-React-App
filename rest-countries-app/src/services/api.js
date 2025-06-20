const BASE_URL = "https://restcountries.com/v2"

// Get all countries
export const getAllCountries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/all`)
    if (!response.ok) {
      throw new Error("Failed to fetch countries")
    }
    return await response.json()
  } catch (error) {
    throw error
  }
}

// Search countries by name
export const searchCountriesByName = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}/name/${name}`)
    if (!response.ok) {
      if (response.status === 404) {
        return [] // Return empty array for no results
      }
      throw new Error("Failed to search countries")
    }
    return await response.json()
  } catch (error) {
    if (error.message.includes("404")) {
      return [] // Return empty array for 404 errors
    }
    throw error
  }
}

// Get countries by region
export const getCountriesByRegion = async (region) => {
  try {
    const response = await fetch(`${BASE_URL}/region/${region}`)
    if (!response.ok) {
      throw new Error("Failed to fetch countries by region")
    }
    return await response.json()
  } catch (error) {
    throw error
  }
}

// Get country by code
export const getCountryByCode = async (code) => {
  try {
    const response = await fetch(`${BASE_URL}/alpha/${code}`)
    if (!response.ok) {
      throw new Error("Failed to fetch country details")
    }
    return await response.json()
  } catch (error) {
    throw error
  }
}
