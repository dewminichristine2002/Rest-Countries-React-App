import { render, screen, waitFor } from "@testing-library/react"
import Home from "../pages/Home"
import { BrowserRouter } from "react-router-dom"
import * as api from "../services/api"

// Mock the API calls
jest.mock("../services/api")

const mockCountries = [
  {
    alpha3Code: "USA",
    name: "United States",
    population: 331002651,
    region: "Americas",
    capital: "Washington, D.C.",
    languages: [{ name: "English" }],
    flags: {
      png: "https://example.com/flag.png",
    },
  },
  {
    alpha3Code: "CAN",
    name: "Canada",
    population: 37742154,
    region: "Americas",
    capital: "Ottawa",
    languages: [{ name: "English" }, { name: "French" }],
    flags: {
      png: "https://example.com/flag.png",
    },
  },
]

test("renders home page with country list", async () => {
  // Mock API response
  api.getAllCountries.mockResolvedValue(mockCountries)

  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  )

  // Check if loading state is shown
  expect(screen.getByText(/Loading countries/i)).toBeInTheDocument()

  // Wait for countries to load
  await waitFor(() => {
    expect(screen.getByText("United States")).toBeInTheDocument()
    expect(screen.getByText("Canada")).toBeInTheDocument()
  })
})
