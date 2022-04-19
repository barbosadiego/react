import React from 'react';

const App = (props) => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem('produto');
    return localItem;
  }, []);
  console.log(valor);
  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>Click {contar}</button>
    </div>
  );
};

export default App;
