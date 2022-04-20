import React from 'react';

const App = (props) => {
  const [nome, setNome] = React.useState('');
  return (
    <form>
      <input
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
    </form>
  );
};

export default App;
