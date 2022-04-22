import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Produtos from './Produtos'
import Contato from './Contato'
import Header from './Header'
import style from './App.module.css'


const App = (props) => {
  return (
    <section className={style.home}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Produtos />}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
