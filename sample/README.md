# REST Countries API React Application

This project is a React application that consumes the REST Countries API to display information about countries around the world. It was developed as part of the SE3040 – Application Frameworks assignment.

## Features

- View a list of all countries with basic information
- Search for countries by name
- Filter countries by region or language
- View detailed information about a specific country
- User authentication (register/login)
- Responsive design for all device sizes

## Technologies Used

- React (with functional components)
- JavaScript
- React Router for navigation
- Tailwind CSS for styling
- Local Storage for user session management
- Jest and React Testing Library for testing

## API Integration

The application integrates with the REST Countries API using the following endpoints:

1. GET /all - To fetch all countries
2. GET /name/{name} - To search countries by name
3. GET /region/{region} - To filter countries by region
4. GET /alpha/{code} - To get detailed information about a specific country

## Setup and Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/rest-countries-app.git
   cd rest-countries-app
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`
   npm start
   \`\`\`

4. Open your browser and navigate to `http://localhost:3000`

## Running Tests

To run the tests:
\`\`\`
npm test
\`\`\`

## Deployment

The application is deployed on [Netlify/Vercel/GitHub Pages] and can be accessed at [URL].

## Project Structure

\`\`\`
rest-countries-app/
├── public/
├── src/
│   ├── components/
│   │   ├── CountryCard.js
│   │   ├── CountryList.js
│   │   ├── FilterDropdown.js
│   │   ├── Header.js
│   │   ├── ProtectedRoute.js
│   │   └── SearchBar.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── CountryDetail.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   └── Register.js
│   ├── services/
│   │   └── api.js
│   ├── tests/
│   │   ├── App.test.js
│   │   ├── CountryCard.test.js
│   │   └── Home.test.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
\`\`\`

## Challenges and Solutions

### Challenge 1: API Rate Limiting
The REST Countries API has rate limiting, which caused issues during development and testing.

**Solution**: Implemented caching mechanisms and optimized API calls to reduce the number of requests.

### Challenge 2: Handling Search and Filter Functionality
Implementing search and filter functionality that works together was challenging.

**Solution**: Used a combination of state management and useEffect hooks to handle the filtering logic efficiently.

### Challenge 3: User Session Management
Implementing user authentication without a backend was challenging.

**Solution**: Used localStorage to store user information and implemented a context API to manage user sessions across the application.

## Future Improvements

- Add a favorites feature to allow users to save their favorite countries
- Implement dark mode
- Add more detailed information about countries
- Implement a backend for proper user authentication and data persistence

## Author

[Your Name]

## License

This project is licensed under the MIT License.
