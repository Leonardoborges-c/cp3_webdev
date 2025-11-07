import React, { useState } from 'react'
import projetos from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projetos(){
  const [q, setQ] = useState('')
  const termo = q.trim().toLowerCase()
  const filtrados = projetos.filter(p => p.title.toLowerCase().includes(termo) || p.short.toLowerCase().includes(termo))

  return (
    <section>
      <h2>Projetos</h2>
      <input aria-label="buscar projetos" placeholder="Buscar projetos..." value={q} onChange={e=>setQ(e.target.value)} className="search" />
      <div className="projects-grid">
        {filtrados.length === 0 ? (
          <p>Nenhum projeto localizado</p>
        ) : (
          filtrados.map(p=> <ProjectCard key={p.id} project={p} />)
        )}
      </div>
    </section>
  )
}
