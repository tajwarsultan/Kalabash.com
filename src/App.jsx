import React from 'react'
import { Header } from './components/header'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navigation } from './routers'
import {Footer} from './components/footer/index'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="layout">
          <Navigation />
          <Footer/>
        </div>
      </div>
    </Router>
  )
}

export default App
