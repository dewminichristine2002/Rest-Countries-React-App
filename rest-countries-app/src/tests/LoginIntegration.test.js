import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import { AuthContext } from "../context/AuthContext"

describe("Integration: Login Page", () => {
  test("logs in and calls context function", () => {
    const login = jest.fn()
    const users = [{ username: "testuser", password: "1234" }]
    localStorage.setItem("users", JSON.stringify(users))

    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ login }}>
          <Login />
        </AuthContext.Provider>
      </BrowserRouter>
    )

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testuser" },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "1234" },
    })
    fireEvent.click(screen.getByRole("button", { name: /login/i }))

    expect(login).toHaveBeenCalledWith(users[0])
  })
})
