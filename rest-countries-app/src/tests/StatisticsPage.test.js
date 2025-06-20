import { render, screen } from "@testing-library/react"
import StatisticsPage from "../pages/StatisticsPage"

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: [] }))
}))

test("renders statistics page title", async () => {
  render(<StatisticsPage />)
  expect(await screen.findByText(/Global Country Statistics/)).toBeInTheDocument()
})
