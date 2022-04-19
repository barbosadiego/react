import React from 'react'

const Button = ({texto, onClick}) => {
  return (
    <button onClick={onClick} style={{margin: '0 .5rem'}}>
      {texto}
    </button>
  )
}

export default Button
