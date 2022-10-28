import React, { useState } from 'react'
import Home from './pages/Homepage'
import About from './pages/About'
import Navigation from './shared/Navigation'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { orange } from '@mui/material/colors'

const App = () => {
  const [checked, setChecked] = useState(false)
  const [mode, setMode] = useState('light')

  const handleChange = () => {
    setChecked(!checked)
    if (checked === false) {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  const theme = createTheme({
    palette: {
      mode: mode
    },
    typography: {
      h2: {
        fontFamily: 'Lato, san-serif'
      },
      h4: {
        fontSize: '1.9rem',
        fontWeight: 400,
        fontFamily: 'Shanti, serif'
      }
    }
  })

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation hrefHome="#home" hrefAbout="#about" onChange={handleChange} checked={checked} />
        <Home id="home" />
        <About id="about" />
      </ThemeProvider>
    </div>
  )
}

export default App
