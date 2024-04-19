import React from 'react'
import './Proyectos.css'

import GestiosGastosImg from '../../assets/GestiosGastos.png'

function Proyectos() {
  return (
    <section className='sect-experiencia'>
      <h2><i className="fa-solid fa-code"></i>Proyectos</h2>
      <article className='article-proyect'>
        <img src={GestiosGastosImg} alt="" />
        <div>
          <h3>Gestor de gastos</h3>
          <div className='tecnologias'>
            <span><i className="fa-brands fa-react"></i> React.js</span>
          </div>
          <p>Este es un proyecto que realice siguiendo un video de Fazt Code. Esta aplicacion te permite registrar los gastos y mostrarlos en un grafico</p>
          <a href="https://pedromax23.github.io/github-pages/"><i className="fa-solid fa-link"></i> Preview</a>
        </div>
      </article>
    </section>
  )
}

export default Proyectos;