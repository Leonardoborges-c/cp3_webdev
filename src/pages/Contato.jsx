import React, { useState } from 'react'

export default function Contato(){
  const [form, setForm] = useState({nome:'', email:'', mensagem:''})

  const onChange = e => setForm({...form, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    alert(`Contato enviado:\nNome: ${form.nome}\nEmail: ${form.email}\nMensagem: ${form.mensagem}`)
    setForm({nome:'', email:'', mensagem:''})
  }

  return (
    <section>
      <h2>Contato</h2>
      <form onSubmit={onSubmit} className="contact-form">
        <label>
          Nome
          <input name="nome" value={form.nome} onChange={onChange} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={onChange} required />
        </label>
        <label>
          Mensagem
          <textarea name="mensagem" value={form.mensagem} onChange={onChange} required />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
