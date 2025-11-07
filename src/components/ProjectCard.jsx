import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.image && (
        <img src={project.image} alt={project.title} className="project-thumb" />
      )}
      <h3>{project.title}</h3>
      <p>{project.short}</p>
      <div className="card-actions">
        <Link to={`/projetos/${project.id}`}>Ver detalhes</Link>
      </div>
    </article>
  )
}
