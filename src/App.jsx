import React from 'react';
import './App.css';
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = (props) => {
  const [produto, setProduto] = React.useState(null);
  const [preferencia, setPreferencia] = React.useState('');

  async function handleClick(event) {
    const target = event.target.innerText;
    const json = await fetchProduto(target);
    setProduto(json);
    localStorage.setItem('@store', JSON.stringify(json.id));
    setPreferencia(target);
  }

  async function fetchProduto(target) {
    const res = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${target}`,
    );
    const json = await res.json();
    return json;
  }

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('@store'));
    if (data) {
      setPreferencia(data);
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${data}`)
        .then((res) => res.json())
        .then((json) => setProduto(json));
    }
  }, []);

  return (
    <section>
      <h1>Preferência: {preferencia}</h1>
      <button onClick={handleClick} style={{ marginRight: '1rem' }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      {produto && <Produto nome={produto.nome} preco={produto.preco} />}
    </section>
  );
};

export default App;
