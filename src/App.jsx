import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import User from './pages/User'

function App() {
 
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col h-screen'>
            <Navbar />
            <main className='pb-16 mb-auto'>
              <div className="container">
                <Routes>
                  <Route path='/' element={ <Home />} />
                  <Route path='/about' element={ <About />} />
                  <Route path='/notfound' element={ <NotFound />} />
                  <Route path='/*' element={ <NotFound />} />
                  <Route path='/user/:login' element={ <User />} />
                </Routes>
              </div>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
