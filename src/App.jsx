import React from 'react'
import useLocalStorage from './useLocalStorage'

const App = (props) => {
  const [produto, setProduto] = useLocalStorage('produto', '')

  function handleClick({target}){
    setProduto(target.innerText)
  }

  return (
    <div>
      <button onClick={handleClick} style={{marginRight:'1rem'}}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  )
}

export default App
