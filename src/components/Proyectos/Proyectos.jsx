import React from 'react'
import './Proyectos.css'

import GestiosGastosImg from '../../assets/GestiosGastos.png'
import Cumpleaños from '../../assets/Cumpleaños.png'

function Proyectos() {
  return (
    <section id='proyectos' className='sect-proyectos'>
      <h2><i className="fa-solid fa-code"></i>Proyectos</h2>
      <article className='article-proyect'>
        <img src={Cumpleaños} alt="" />
        <div>
          <h3>Galeriad de fotos</h3>
          <div className='tecnologias'>
            <span className='tec-react'><i className="fa-brands fa-react"></i> React.js</span>
          </div>
          <p>Este proyecto lo he creado para exhibir las hermosas fotos que tomamos durante mi cumpleaños.
            <br />
            Además, he usado React para la interfaz visual y poder visualizar las imágenes.
          </p>
          <a href="https://pedromax23.github.io/Fotos-Pedro-React/"><i className="fa-solid fa-link"></i> Preview</a>
          <a href="https://github.com/pedromax23/Fotos-Pedro-React"><i className="fa-solid fa-link"></i> Code</a>
        </div>
      </article>
      <article className='article-proyect'>
        <img src={GestiosGastosImg} alt="" />
        <div>
          <h3>Gestor de gastos</h3>
          <div className='tecnologias'>
            <span className='tec-react'><i className="fa-brands fa-react"></i> React.js</span>
          </div>
          <p>Este es un proyecto que realicé siguiendo un vídeo de Fazt Code. Esta aplicación te permite registrar los gastos y mostrarlos en un gráfico.</p>
          <a href="https://pedromax23.github.io/github-pages/"><i className="fa-solid fa-link"></i> Preview</a>
          <a href="https://github.com/pedromax23/react-expenses-tracker"><i className="fa-solid fa-link"></i> Code</a>
        </div>
      </article>
    </section>
  )
}

export default Proyectos;