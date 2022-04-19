import React from 'react';

const App = (props) => {
  const [coment, setComent] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick() {
    setComent([...coment, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {coment.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick} style={{ marginTop: '1rem' }}>
        Enviar
      </button>
    </div>
  );
};

export default App;
