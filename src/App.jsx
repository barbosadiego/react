import React from 'react';
import Input from './Form/Input';
import useForm from './Hook/useForm';

const App = (props) => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviado');
    } else {
      console.log('Não enviado');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" {...nome} />
      <Input label="sobrenome" id="sobrenome" type="text" {...sobrenome} />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="seuemail@provedor.com"
        {...email}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
