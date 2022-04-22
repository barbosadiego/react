import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
  font-size: 2.4rem;
  color: #43c;
`

const Paragrafo = styled.p`
  font-size: 1.4rem;
  line-height: 1.2;
  color: tomato;
`

const App = (props) => {
  return (
    <div>
      <Titulo>Meu título</Titulo>
      <Paragrafo>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nemo cum reprehenderit inventore aspernatur. Numquam, cupiditate! Officia ipsa nulla enim adipisci ex laudantium fugiat vero expedita dignissimos ipsum, quidem eveniet?</Paragrafo>
    </div>
  )
}

export default App
