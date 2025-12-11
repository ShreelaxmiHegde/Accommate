import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './context/AuthContext.jsx'
import { FlashProvider } from './context/FlashContext.jsx'
import { ErrProvider } from './context/ErrContext.jsx'
import ErrBanner from "./pages/ErrBanner.jsx"

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <AuthProvider>
    <ErrProvider>
      <ErrBanner/>
      <FlashProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FlashProvider>
    </ErrProvider>
  </AuthProvider>
  // {/* </StrictMode>, */}
)
