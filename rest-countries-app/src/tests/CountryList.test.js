import { render, screen } from "@testing-library/react"
import CountryList from "../components/CountryList"

const mockCountries = [
  { name: "Japan", population: 125800000, region: "Asia", capital: "Tokyo", flags: { png: "..." }, alpha3Code: "JPN" }
]

test("renders loading message when loading", () => {
  render(<CountryList countries={[]} loading={true} error={null} />)
  expect(screen.getByText(/Loading countries/)).toBeInTheDocument()
})

test("renders error message when error exists", () => {
  render(<CountryList countries={[]} loading={false} error="Server error" />)
  expect(screen.getByText(/Server error/)).toBeInTheDocument()
})

test("renders message when no countries match", () => {
  render(<CountryList countries={[]} loading={false} error={null} />)
  expect(screen.getByText(/No countries found/)).toBeInTheDocument()
})
