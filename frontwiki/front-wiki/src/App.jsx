import React from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'

// import Services from './components/apiCalls/GetServices'
import Landing from '../src/components/Landing.jsx'
import HomePage from "./components/pages/HomePage.jsx"

export function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </Router>
    </main>
  )
}
