import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screeens/HomeScreen';
import ProductScreen from './screeens/ProductScreen';
import CartScreen from './screeens/CartScreen';

const App = ()=> {
  return (
    <Router>
    <Header />
      <main className='py-3'>
      <Container>
      <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/products/:id' element={<ProductScreen/>} />
      <Route path='/cart/:id' element={<CartScreen/>} />
      </Routes>
      </Container>
      </main>
    <Footer />
    </Router>
  );
}


export default App;
