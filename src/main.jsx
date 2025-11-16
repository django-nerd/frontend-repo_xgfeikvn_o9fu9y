import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'

// Global error logging
window.addEventListener('error', (e) => {
  console.error('[GlobalError]', e.message, e.error)
})
window.addEventListener('unhandledrejection', (e) => {
  console.error('[UnhandledRejection]', e.reason)
})

function Root() {
  useEffect(() => {
    console.log('[Root] starting app')
    console.log('[Env] VITE_BACKEND_URL =', import.meta.env.VITE_BACKEND_URL)
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
