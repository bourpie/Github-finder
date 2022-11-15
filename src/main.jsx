import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './pages/About';
import NotFound from './pages/NotFound';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <main className='pb-16'>
          <div className="container">
            <Routes>
              <Route path='/' element={ <App />} />
              <Route path='/about' element={ <About />} />
              <Route path='/notfound' element={ <NotFound />} />
              <Route path='/*' element={ <NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
)
