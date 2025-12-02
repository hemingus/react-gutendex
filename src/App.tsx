import { Outlet } from 'react-router-dom'
import './App.css'
import './index.css'
import NavBar from './components/NavBar'
import { FavoritesProvider } from './context/FavoritesContext'

function App() {
  return (
      <FavoritesProvider> 
          <NavBar />
          <Outlet />
      </FavoritesProvider>
  )
}

export default App
