import React from 'react'
import styles from './Produto.module.css'

const Produto = (props) => {
  console.log(styles)
  return (
    <div>
      <h1 className={styles.titulo}>Produto</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, error enim dolore veritatis tenetur, inventore quam non sunt dicta nihil blanditiis voluptas exercitationem quisquam vel, expedita illum suscipit quas sed.</p>
      <p className={styles.preco}>R$ 4500</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  )
}

export default Produto
