import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';

const Home = (props) => {
  return (
    <div>
      <Head title='Página inicial' description='Essa é a descricao'/>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
        inventore, optio voluptate ex eum quibusdam explicabo dolore maxime.
        Temporibus a praesentium ullam nihil enim totam qui ipsum provident,
        quam voluptate.
      </p>
      <Link to="produto/notebook">Notebook</Link> |
      {' '}<Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
