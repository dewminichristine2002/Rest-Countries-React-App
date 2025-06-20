import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import Countries from "../pages/Countries"
import * as api from "../services/api"
import { MemoryRouter } from 'react-router-dom';


jest.mock("../services/api")

const mockData = [
  {
    name: "Japan",
    population: 125800000,
    region: "Asia",
    capital: "Tokyo",
    flags: { png: "japan.png" },
    alpha3Code: "JPN",
    languages: [{ name: "Japanese" }],
  },
  {
    name: "Germany",
    population: 83000000,
    region: "Europe",
    capital: "Berlin",
    flags: { png: "germany.png" },
    alpha3Code: "DEU",
    languages: [{ name: "German" }],
  },
]

describe("Integration: Countries Page", () => {
  beforeEach(() => {
    api.getAllCountries.mockResolvedValue(mockData)
    api.searchCountriesByName.mockResolvedValue([mockData[0]])
  })

  test("loads and displays countries", async () => {
    render( <MemoryRouter>
      <Countries />
      </MemoryRouter>)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText("Japan")).toBeInTheDocument()
      expect(screen.getByText("Germany")).toBeInTheDocument()
    })
  })

  test("filters countries by search term", async () => {
    render(<MemoryRouter>
      <Countries />
      </MemoryRouter>)

    const searchInput = screen.getByPlaceholderText(/search/i)
    fireEvent.change(searchInput, { target: { value: "Japan" } })

    await waitFor(() => {
      expect(screen.getByText("Japan")).toBeInTheDocument()
      expect(screen.queryByText("Germany")).not.toBeInTheDocument()
    })
  })
})
