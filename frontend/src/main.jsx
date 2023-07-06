import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/GlobalStyle.jsx'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
