import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'

const Header = (props) => {
  return (
    <nav>
      <button className={style.btn}>
        <Link to='/'>Produtos</Link>
      </button>
      <button className={style.btn}>
        <Link to='/contato'>Contato</Link>
      </button>
    </nav>
  )
}

export default Header
