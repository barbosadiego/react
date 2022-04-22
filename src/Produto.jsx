import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Produto = (props) => {
  const parans = useParams()
  const location = useLocation()

  console.log(location)
  return (
    <div>
      <h1>Poduto: {parans.id}</h1>
    </div>
  )
}

export default Produto
