import React from 'react';
import Button from './Button';
import Produto from './Produto';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [item, setItem] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function handleFetch(e) {
    setLoading(true);
    const produto = e.target.innerText;
    const res = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
    );
    const json = await res.json();
    setItem(json);
    
    setLoading(false);
  }

  return (
    <>
      <Button onClick={handleFetch} texto="notebook" />
      <Button onClick={handleFetch} texto="smartphone" />
      <Button onClick={handleFetch} texto="tablet" />
      {item && !loading ? <Produto dados={item} /> : null}
      {loading && <p>Carregando...</p>}
    </>
  );
};

export default App;
