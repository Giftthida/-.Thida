import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Footer from './pages/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/contact" element={<Contact/>} />
      
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
