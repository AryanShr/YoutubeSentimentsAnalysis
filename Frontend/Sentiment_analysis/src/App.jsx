import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import LoadingScreen from './components/LoadingScreen'
import './App.css'
import DashBoard from './components/DashBoard'

function App() {
  const [loading, setLoading] = useState(false)
  return (
    <Router>
        {loading && <LoadingScreen />}
      <Routes>
        <Route path='/' Component={() => <SearchBar loader={(state) => setLoading(state)} />} />
        <Route path='/dashboard' Component={() => <DashBoard />} />
      </Routes>
    </Router>
  )
}

export default App
