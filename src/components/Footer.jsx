import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <small>Feito por Leonardo Borges da Costa — © {new Date().getFullYear()}</small>
        <div className="socials">
          <a href="#" aria-label="GitHub"><FaGithub/></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin/></a>
        </div>
      </div>
    </footer>
  )
}
