import React from 'react';
import './App.css';

const App = (props) => {
  const [contar, setContar] = React.useState(0);
  console.log('exeutou fora')
  React.useEffect(() => console.log('executou'), []);

  React.useEffect(() => {
    document.title = 'Total ' + contar
  }, [contar])

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
