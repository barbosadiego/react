import React from 'react';

const App = () => {
  const fields = [
    {
      id: 'nome',
      label: 'Nome',
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      id: 'senha',
      label: 'Senha',
      type: 'password',
    },
    {
      id: 'cep',
      label: 'Cep',
      type: 'text',
    },
    {
      id: 'rua',
      label: 'Rua',
      type: 'text',
    },
    {
      id: 'numero',
      label: 'Número',
      type: 'text',
    },
    {
      id: 'bairro',
      label: 'Bairro',
      type: 'text',
    },
    {
      id: 'cidade',
      label: 'Cidade',
      type: 'text',
    },
    {
      id: 'estado',
      label: 'Estado',
      type: 'text',
    },
  ];

  const [form, setForm] = React.useState(
    fields.reduce((acc, item) => {
      return {
        ...acc,
        [item.id]: '',
      };
    }, {}),
  );

  const [confirm, setConfirm] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(form);
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((res) => setConfirm(res));
    // console.log(confirm);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ id, type, label }) => (
        <div key={id}>
          <label htmlFor={id} style={{ textTransform: 'capitalize' }}>
            {label}
          </label>
          <input id={id} type={type} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      <button>Enviar</button>
      {confirm && confirm.ok ? 'Usuário cadastrado' : ''}
    </form>
  );
};

export default App;
