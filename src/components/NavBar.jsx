import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <h1 className="brand">Leonardo Borges</h1>
        <nav>
          <NavLink to="/" end className={({isActive})=> isActive? 'active' : ''}>Início</NavLink>
          <NavLink to="/projetos" className={({isActive})=> isActive? 'active' : ''}>Projetos</NavLink>
          <NavLink to="/contato" className={({isActive})=> isActive? 'active' : ''}>Contato</NavLink>
        </nav>
      </div>
    </header>
  )
}
