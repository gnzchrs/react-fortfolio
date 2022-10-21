import React from 'react'
import Home from './pages/Homepage'
import About from './pages/About'
import Navigation from './shared/Navigation'

const App = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Navigation hrefHome="#home" hrefAbout="#about" />
      <Home id="home" />
      <About id="about" />
    </div>
  )
}

export default App
