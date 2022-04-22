import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import NaoEncontrada from './NaoEncontrada';

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
