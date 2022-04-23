import React from 'react';
import ImageContato from './Images/contato.jpg';
import './Contato.css';

const Contato = (props) => {
  return (
    <section className='contato'>
      <div className='contato_img'>
        <img src={ImageContato} alt="contato" />
      </div>
      <div className='contato_desc'>
        <h1>Entre em contato</h1>
        <ul>
          <li>contato@contato.com</li>
          <li>tel: 9 9999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
