import React from 'react';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState('');

  return (
    <form>
      <h2>Cores</h2>
      <Radio options={['azul', 'vermelho']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={['banana', 'laranja']}
        value={fruta}
        setValue={setFruta}
      />
      <Select
        options={['smartphone', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
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
