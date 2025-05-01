import { render, screen } from "@testing-library/react"
import App from "../App"

// Mock the AuthContext
jest.mock("../context/AuthContext", () => ({
  AuthContext: {
    Consumer: ({ children }) =>
      children({
        isAuthenticated: false,
        user: null,
        loading: false,
        login: jest.fn(),
        register: jest.fn(),
        logout: jest.fn(),
      }),
  },
  AuthProvider: ({ children }) => children,
}))

// Mock react-router-dom
jest.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: () => <div>Route</div>,
  Link: ({ children }) => <div>{children}</div>,
  Navigate: () => <div>Navigate</div>,
  useNavigate: () => jest.fn(),
}))

test("renders app component", () => {
  render(<App />)
  const appElement = screen.getByText(/Route/i)
  expect(appElement).toBeInTheDocument()
})
