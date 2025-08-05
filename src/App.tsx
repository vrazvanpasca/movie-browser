import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { HomePage } from './pages/HomePage'
import { MovieDetailPage } from './pages/MovieDetailPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className='app'>
        <Navigation />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie/:id' element={<MovieDetailPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
