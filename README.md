# MoviePilot 🎬

MoviePilot is a React-based web application that allows users to search for movies using the OMDb API. It features a responsive design, routing, and a clean UI built with Tailwind CSS.

## Features

- **Search Movies:** Search for any movie by title.
- **Responsive UI:** Fully responsive design that works seamlessly on mobile and desktop.
- **Routing:** Seamless navigation between Home, Favourites, and Movie Detail pages.
- **Loading & Error States:** Graceful handling of API requests with custom loading indicators and error messages.

## Technologies Used

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS (v4)
- **Routing:** React Router (v6+)
- **API:** OMDb API
- **Icons & Extras:** `react-icons`, `react-loading-indicators`

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- An API key from the OMDb API.

### Installation

1. Clone the repository and navigate into the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your OMDb API key:
   ```env
   VITE_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
