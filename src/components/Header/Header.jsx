import React from 'react'

import './Header.css'

function Header() {
  return (
    <header>
        <nav className='nav-header'>
            <ul className='header-ul'>
                <li>Experiencia</li>
                <li>Proyectos</li>
                <li>Sobre mí</li>
                <li>Contacto</li>
                <div>
                    <button className='header-button'><i className="fa-regular fa-moon"></i></button>
                </div>
            </ul>
        </nav>
    </header>
  )
}

export default Header