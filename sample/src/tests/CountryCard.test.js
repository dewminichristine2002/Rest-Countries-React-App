import { render, screen } from "@testing-library/react"
import CountryCard from "../components/CountryCard"
import { BrowserRouter } from "react-router-dom"

// Mock country data
const mockCountry = {
  alpha3Code: "USA",
  name: "United States",
  population: 331002651,
  region: "Americas",
  capital: "Washington, D.C.",
  flags: {
    png: "https://example.com/flag.png",
  },
}

test("renders country card with correct information", () => {
  render(
    <BrowserRouter>
      <CountryCard country={mockCountry} />
    </BrowserRouter>,
  )

  expect(screen.getByText("United States")).toBeInTheDocument()
  expect(screen.getByText(/Population:/)).toBeInTheDocument()
  expect(screen.getByText(/Region: Americas/)).toBeInTheDocument()
  expect(screen.getByText(/Capital: Washington, D.C./)).toBeInTheDocument()
  expect(screen.getByAltText("Flag of United States")).toBeInTheDocument()
})
