import React from 'react';

const App = (props) => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
