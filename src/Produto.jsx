import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = (props) => {
  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((res) => res.json())
      .then((json) => global.setData(json));
  }, []);

  // console.log(global);

  return (
    <div>
      <h1>dados:</h1>
      <ul>
        {global.data &&
          global.data.map((item) => (
            <li key={item.id}>
              {item.nome} / R$ {item.preco}
            </li>
          ))}
      </ul>
      {global.data ? <button onClick={global.limparDados}>Limpar dados</button> : null}
    </div>
  );
};

export default Produto;
