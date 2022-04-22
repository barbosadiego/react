import React from 'react';
import foto from './img/foto.jpg';
import './App.css';
import DogSvg from './DogSvg';

const App = (props) => {
  const [olho, setOlho] = React.useState(0);

  function handleClick(){
    for(let i = 0; i < 6; i++){
      setTimeout(()=>{
        setOlho(i)
      }, 30 * i)
    }
  }

  return (
    <div>
      <p className="fundo" onClick={handleClick}></p>
      <DogSvg color='#444' olho={olho}/>
      <img src={foto} alt="cachorro" />
    </div>
  );
};

export default App;
