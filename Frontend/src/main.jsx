import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PlayerContextProvider from './context/playercontext'
import UserContextProvider from './context/usercontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserContextProvider>
  <PlayerContextProvider>
      <App />
  </PlayerContextProvider>
  </UserContextProvider>
</BrowserRouter>
)
