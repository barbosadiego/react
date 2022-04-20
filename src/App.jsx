import React from 'react';

const App = (props) => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }

  function handleCor({ target }) {
    setCor(target.value);
  }

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input type="radio" name="cor" onChange={handleCor} value="azul" />
        Azul
      </label>
      <label>
        <input type="radio" name="cor" onChange={handleCor} value="amarelo" />
        Amarelo
      </label>
      <p>Selecionado: {cor}</p>
      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          name="produto"
          onChange={handleChange}
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          name="produto"
          onChange={handleChange}
          value="notebook"
        />
        Notebook
      </label>
      <p>Selecionado: {produto}</p>
    </form>
  );
};

export default App;
