import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PlayerContextProvider from './context/playercontext'
import AuthProvider from './context/Authcontext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
  <PlayerContextProvider>
      <App />
  </PlayerContextProvider>
  </AuthProvider>
  </BrowserRouter>
)
