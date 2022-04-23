import React from 'react';
import { Link } from 'react-router-dom';
import style from './App.module.css';

const Produtos = (props) => {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((res) => res.json())
      .then((json) => setProdutos(json));
  }, []);

  return (
    <section className={style.produtos}>
      {produtos.map((item) => (
        <div key={item.id} className={style.item}>
          <Link to={`produto/${item.id}`}>
            <img src={item.fotos[0].src} alt={item.fotos[0].titulo} />
            <h2>{item.nome}</h2>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Produtos;
