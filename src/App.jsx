import React from 'react';
import Input from './Form/Input';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
      <Input id="nome" label="nome" value={nome} setValue={setNome} />
      <Input
        id="email"
        label="email"
        value={email}
        setValue={setEmail}
        requeried
      />
      <button>enviar</button>
    </form>
  );
};

export default App;
