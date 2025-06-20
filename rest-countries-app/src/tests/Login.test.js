import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import Login from "../pages/Login"

test("shows error if username or password is empty", () => {
  const login = jest.fn()
  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ login }}>
        <Login />
      </AuthContext.Provider>
    </BrowserRouter>
  )

  fireEvent.click(screen.getByRole("button", { name: /login/i }))
  expect(screen.getByText("Please enter both username and password")).toBeInTheDocument()
})
