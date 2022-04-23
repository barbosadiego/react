import React from 'react';
import { useParams } from 'react-router-dom';
import './ProdutoPagina.css';

const ProdutoPagina = () => {
  const [produto, setProduto] = React.useState(null);
  const parans = useParams();

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${parans.id}`)
      .then((res) => res.json())
      .then((json) => setProduto(json));
  }, []);

  // console.log(produto);
  return (
    <section className="produto_section">
      {produto && (
        <div className="produto">
          <div className="produto_img">
            {produto.fotos.map((foto, index) => (
              <img key={index} src={foto.src}></img>
            ))}
          </div>
          <div>
            <h1>{produto.nome}</h1>
            <span className="produto_preco">{produto.preco}</span>
            <p className="produto_texto">{produto.descricao}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProdutoPagina;
