import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');

  return (
    <form>
      <Select options={['smartphone', 'tablet']} value={produto} setValue={setProduto}/>
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
