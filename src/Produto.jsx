import React from 'react'

const Produto = ({nome, preco}) => {
  return (
    <div>
      <h1>{nome}</h1>
      <p>R$ {preco}</p>
    </div>
  )
}

export default Produto
