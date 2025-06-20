# REST Countries Explorer

A responsive React application built for SE3040 – Application Frameworks Assignment 02. This app uses the REST Countries API to allow users to explore countries by name, region, and language, view detailed information, and analyze global data through visual statistics.

---

## Features

- Search countries by name with dynamic filtering
- Filter countries by region and language
- View full country details including population, currency, region, borders, and more
- Interactive statistics dashboard with charts for region, language, and population
- User login and registration system (using localStorage)
- Styled with Tailwind CSS using a modern dark theme
- Fully responsive interface that works across devices

---

## API Endpoints Used

- `GET /all` – fetch all countries
- `GET /name/{name}` – search by country name
- `GET /region/{region}` – filter countries by region
- `GET /alpha/{code}` – get country details by code

---

## Tech Stack

- React (Functional Components and Hooks)
- Tailwind CSS
- Chart.js
- REST Countries API
- VanillaTilt.js
- React Router
- Jest and React Testing Library

---

## Setup Instructions

```bash
git clone https://github.com/SE1020-IT2070-OOP-DSA-25/af-2-dewminichristine2002.git
cd rest-countries-app
npm install
npm start


Hosting

hosted link https://countries.exploer.beewebapps.com/
