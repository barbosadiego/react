import React from 'react';

const App = (props) => {
  const [termos, setTermos] = React.useState(false);

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="Termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Li os termos.
      </label>
      <p>Aceito? {termos ? 'sim' : 'não'}</p>
    </form>
  );
};

export default App;
