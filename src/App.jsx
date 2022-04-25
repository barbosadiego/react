import React from 'react';
// import Contato from './Contato'
const Contato = React.lazy(() => import('./Contato'));

const App = (props) => {
  return (
    <div>
      <React.Suspense fallback={<div>Carregando...</div>}>
        <Contato />
      </React.Suspense>
    </div>
  );
};

export default App;
