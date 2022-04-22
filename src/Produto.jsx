import React from 'react';
import { NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliação from './ProdutoAvaliação';
import ProdutoCustomizado from './ProdutoCustomizado';

const Produto = (props) => {
  const parans = useParams();
  const location = useLocation();

  // console.log(location)
  return (
    <div>
      <h1>Poduto: {parans.id}</h1>
      <nav>
        <NavLink to=''>Descrição</NavLink> {' '}
        <NavLink to='avaliacao'>Avaliação</NavLink> {' '}
        <NavLink to='customizado'>Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="/avaliacao" element={<ProdutoAvaliação />} />
        <Route path='/customizado' element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto;
