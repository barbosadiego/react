import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './Produtos';
import Contato from './Contato';
import Header from './Header';
import style from './App.module.css';
import ProdutoPagina from './ProdutoPagina';
import Footer from './Footer';

const App = (props) => {
  return (
    <section className={style.home}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produto/:id" element={<ProdutoPagina />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </section>
  );
};

export default App;
