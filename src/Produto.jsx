import React from 'react';
import { NavLink, useLocation, useParams, Outlet } from 'react-router-dom';

const Produto = (props) => {
  const parans = useParams();
  const location = useLocation();

  // console.log(location)
  return (
    <div>
      <h1>Poduto: {parans.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>{' '}
        <NavLink to="avaliacao">Avaliação</NavLink>{' '}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
