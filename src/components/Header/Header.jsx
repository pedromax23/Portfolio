import React from 'react'

import './Header.css'

function Header() {
  return (
    <header>
        <nav className='nav-header'>
            <ul className='header-ul'>

                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href='#sobreMi'>Sobre mí</a></li>
                <div>
                    <button className='header-button'><i className="fa-regular fa-moon"></i></button>
                </div>
            </ul>
        </nav>
    </header>
  )
}

export default Header