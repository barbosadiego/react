import React from 'react';
import './App.css';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [radio, setRadio] = React.useState([]);
  const [pontos, setPontos] = React.useState(0);
  const [mensagem, setMensagem] = React.useState('');

  function handleClick({ target }) {
    setRadio([...radio, target.value]);
  }

  function totalPontos() {
    setMensagem('');
    setPontos(0);
    radio.forEach((item, index) => {
      if (item === perguntas[index].resposta) {
        setPontos((pontos) => pontos + 1);
      }
    });
    setMensagem('Você acertou ');
  }
  // console.log(pontos);
  // console.log(radio);
  // console.log(perguntas)
  return (
    <>
      {perguntas.map((item) => (
        <section key={item.id} className="section">
          <form>
            <h2>{item.pergunta}</h2>
            {item.options.map((opt, index) => (
              <div key={index} className="input">
                <input
                  type="radio"
                  name="question"
                  value={opt}
                  // checked={opt === item.pergunta}
                  onChange={handleClick}
                />
                {opt}
              </div>
            ))}
          </form>
        </section>
      ))}
      <button onClick={totalPontos}>Total</button>
      {mensagem && <p>{mensagem}{pontos}</p>}
    </>
  );
};

export default App;
