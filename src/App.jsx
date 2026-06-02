import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import ErrorMessage from './components/ErrorMessage'
import Home from './Pages/Home'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div>
    <Navbar />
    <Outlet />
    </div>
  )
}

export default App
