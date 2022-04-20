import React from 'react';

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

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
    // .then((json) => setConfirm(json));
    console.log(confirm);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(form).map((key) => (
        <div key={key}>
          <label htmlFor={key} style={{ textTransform: 'capitalize' }}>
            {key}
          </label>
          <input
            id={key}
            type="text"
            value={form[key]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button>Enviar</button>
      {confirm && confirm.status === 200 ? 'Usuário cadastrado' : ''}
    </form>
  );
};

export default App;
