import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projetos from '../data/projects'

export default function DetalhesProjeto(){
  const { id } = useParams()
  const projeto = projetos.find(p=>p.id===id)
  if(!projeto) return (
    <section>
      <h2>Projeto não encontrado</h2>
      <Link to="/projetos">Voltar</Link>
    </section>
  )

  return (
    <section>
      <h2>{projeto.title}</h2>
      {projeto.image && (
        <img src={projeto.image} alt={projeto.title} className="project-detail-img" />
      )}
      <p>{projeto.description}</p>
      <Link to="/projetos">Voltar</Link>
    </section>
  )
}
