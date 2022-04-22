import React from 'react';


const Produtos = (props) => {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((res) => res.json())
      .then((json) => setProdutos(json));
  }, []);

  console.log(produtos);

  return (
    <section>
      {produtos.map((item) => (
        <div>
          <h2>{item.nome}</h2>
          <img src={item.fotos[0].src} alt={item.fotos[0].titulo} />
        </div>
      ))}
    </section>
  );
};

export default Produtos;
