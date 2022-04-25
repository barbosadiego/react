import React from 'react';
import Exemplo from './Exemplo';

function reducer(state, action) {
  // console.log(state);
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'diminuir':
      return state - 1;
    default:
      throw new Error();
  }
}

const App = (props) => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <div>
        <p>{state}</p>
        <button
          style={{ marginRight: '1rem' }}
          onClick={() => dispatch('aumentar')}
        >
          +
        </button>
        <button onClick={() => dispatch('diminuir')}>-</button>
      </div>
      <div>
        <Exemplo/>
      </div>
    </div>
  );
};

export default App;
