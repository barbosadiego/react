import React from 'react';

const App = (props) => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1);

  function operacaoLenta() {
    let c;
    for (let i = 0; i < 100000000; i++) {
      c = i + 1 / 10;
    }
    return c;
  }

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>Click {contar}</button>
    </div>
  );
};

export default App;
