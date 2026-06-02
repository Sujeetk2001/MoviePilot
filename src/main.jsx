import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './Pages/Home'
import Favourites from './Pages/Favourites'
import MovieDetail from './Pages/MovieDetail'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/favourites",
        element: <Favourites />
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
