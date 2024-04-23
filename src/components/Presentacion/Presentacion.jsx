import React from 'react'
import './Presentacion.css'

function Presentacion() {
  return (
    <div id='inicio' className='div-presentacion'>
        <div className='sub-div'>
            <img src="https://media.licdn.com/dms/image/D4D35AQElUQW2Vac5NQ/profile-framedphoto-shrink_200_200/0/1712863324083?e=1714075200&v=beta&t=rABWJqH7At9SVComcz0yAYofAK8RfAJcatphZmqXz3A" alt="" />
            <a href="https://www.linkedin.com/in/pedromorgade/">Disponible para trabajar</a>
        </div>

        <h1>Pedro Morgade</h1>

        <p className='info-presentacion'>
            <strong>Desarrollador Web Full Stack.</strong> Soy de Mar del Plata, Argentina. Especializado en el desarrollo de aplicaciones web únicas.
        </p>

        <div className='div-botones'>
            <a href=""><i className="fa-solid fa-envelope"></i> Contáctame</a>
            <a href="https://www.linkedin.com/in/pedromorgade/"><i className="fa-brands fa-linkedin"></i> Linkedin</a>
        </div>
    </div>
  )
}

export default Presentacion