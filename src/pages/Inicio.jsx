import React from 'react'
import avatar from '../assets/avatar.svg'

export default function Inicio(){
  return (
    <section className="home">
      <div className="container profile">
        <img
          src={avatar}
          alt="Foto de Leonardo Borges da Costa"
          className="profile-photo"
  />
        <div>
          <h2>Olá — Leonardo Borges da Costa</h2>
          <p>Sou estudante de desenvolvimento web. Aqui apresento projetos desenvolvidos durante o curso e formas de contato.</p>
          <p>Principais tecnologias: HTML, CSS, JavaScript e React.</p>
        </div>
      </div>
    </section>
  )
}
