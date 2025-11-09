import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";
import './styles/styles.css'

// Hydrate the single React root and keep StrictMode enabled for dev warnings.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
