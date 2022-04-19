import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = (props) => {
  const global = React.useContext(GlobalContext);

  // function handleClick() {
  //   global.setContar((contar) => contar + 1);
  // }

  return (
    <div>
      <p>Produto: {global.contar}</p>
      <button onClick={() => global.adicionarDois()}>Click</button>
    </div>
  );
};

export default Produto;
