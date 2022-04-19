import React from 'react';

const App = (props) => {
  const [contar, setContar] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click {contar}</button>
    </div>
  );
};

export default App;
