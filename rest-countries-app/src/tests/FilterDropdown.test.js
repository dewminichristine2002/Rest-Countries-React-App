import { render, screen, fireEvent } from "@testing-library/react"
import FilterDropdown from "../components/FilterDropdown"

test("renders dropdown with options and label", () => {
  const mockOptions = ["Asia", "Europe"]
  render(
    <FilterDropdown options={mockOptions} value="" onChange={() => {}} label="Region" />
  )

  expect(screen.getByText(/Region/)).toBeInTheDocument()
})
