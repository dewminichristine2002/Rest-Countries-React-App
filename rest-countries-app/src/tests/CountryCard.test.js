import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CountryCard from "../components/CountryCard"

const mockCountry = {
  name: "Japan",
  population: 125800000,
  region: "Asia",
  capital: "Tokyo",
  flags: { png: "https://flagcdn.com/w320/jp.png" },
  alpha3Code: "JPN"
}

test("renders country card with name, region, capital, and population", () => {
  render(
    <BrowserRouter>
      <CountryCard country={mockCountry} />
    </BrowserRouter>
  )

  expect(screen.getByText("Japan")).toBeInTheDocument()
  expect(screen.getByText(/Asia/)).toBeInTheDocument()
  expect(screen.getByText(/Tokyo/)).toBeInTheDocument()
  expect(screen.getByText(/Population:/)).toBeInTheDocument()
})
