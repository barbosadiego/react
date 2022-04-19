import React from 'react';

const App = (props) => {
  const [coment, setComent] = React.useState(['teste', 'teste2', 'oi', 'ok']);
  return (
    <div>
      <ul>
        {coment.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
