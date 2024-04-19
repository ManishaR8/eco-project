import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router , Route,  Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <div className=' bg-white'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App