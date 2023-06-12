import React from 'react'
import { BrowserRouter as Router , Route, Routes, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'; 
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Product from './pages/Product';
import Home from './pages/Home';

// import './index2.css'

const App = () => {
  return (
    <Router>
        <Header />
       <main className='py-5'>
       <Container>
      <Routes>

        <Route path="/" Component={Home} exact />
        <Route path="/Product/:id" Component={Product}  />
        </Routes>
        </Container>
       </main>
        <Footer />
    </Router>
  )
 
}


export default App
