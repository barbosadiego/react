import React from 'react';

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const App = (props) => {
  const [cores, setCores] = React.useState([]);

  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  console.log(cores)

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{textTransform:'capitalize'}}>
          <input
            type="checkbox"
            value={cor}
            onChange={handleChange}
            checked={cores.includes(cor)}
          />
          {cor}
        </label>
      ))}
    </form>
  );
};

export default App;
