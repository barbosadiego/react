import React from 'react';

const App = (props) => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item no carrinho.');

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
  }
  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar {carrinho}</button>
    </div>
  );
};

export default App;
