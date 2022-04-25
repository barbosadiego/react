import React from 'react'

const Header = (props) => {
  console.log('Renderizou')
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}

export default React.memo(Header)