import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './context/AuthContext.jsx'
import { FlashProvider } from './context/FlashContext.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <AuthProvider>
    <FlashProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FlashProvider>
  </AuthProvider>
  // {/* </StrictMode>, */}
)
