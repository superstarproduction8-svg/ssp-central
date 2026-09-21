'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

type FormState = {
  nom: string
  prenom: string
  email: string
  telephone: string
  type: string
  code_referent: string
}

const initialState: FormState = {
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  type: 'Membre',
  code_referent: '',
}

export default function InscriptionPage() {
  const [form, setForm] = useState<FormState>(initialState)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage(null)

    if (!form.nom.trim() || !form.prenom.trim() || !form.telephone.trim()) {
      setMessage({ type: 'err', text: 'Tanpri ranpli Nom, Prénom ak Téléphone.' })
      return
    }

    setLoading(true)

    // Tout done yo ale dirèkteman nan Supabase — pa gen localStorage ditou.
    const { error } = await supabase.from('inscriptions').insert([
      {
        nom: form.nom.trim(),
        prenom: form.prenom.trim(),
        email: form.email.trim() || null,
        telephone: form.telephone.trim(),
        type: form.type,
        code_referent: form.code_referent.trim() || null,
        statut: 'En attente de validation',
      },
    ])

    setLoading(false)

    if (error) {
      console.error(error)
      setMessage({
        type: 'err',
        text: 'Erè pandan anrejistreman an: ' + error.message,
      })
      return
    }

    setMessage({
      type: 'ok',
      text: 'Enskripsyon anrejistre! Kont ou "En attente de validation" jiskaske yon Admin verifye l.',
    })
    setForm(initialState)
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">
        ← Retour
      </Link>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>S&apos;inscrire — SSP CENTRAL</h2>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Nom</label>
            <input
              type="text"
              value={form.nom}
              onChange={(e) => updateField('nom', e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Prénom</label>
            <input
              type="text"
              value={form.prenom}
              onChange={(e) => updateField('prenom', e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
            />
          </div>

          <div className="field">
            <label>Téléphone</label>
            <input
              type="text"
              value={form.telephone}
              onChange={(e) => updateField('telephone', e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Je souhaite m&apos;inscrire comme</label>
            <select value={form.type} onChange={(e) => updateField('type', e.target.value)}>
              <option>Membre</option>
              <option>Agent</option>
              <option>Investisseur</option>
              <option>Collaborateur</option>
              <option>Étudiant</option>
            </select>
          </div>

          <div className="field">
            <label>Code de référence (si genyen)</label>
            <input
              type="text"
              placeholder="Ex: SC-M-000001"
              value={form.code_referent}
              onChange={(e) => updateField('code_referent', e.target.value)}
            />
          </div>

          {message && (
            <p className={`msg ${message.type === 'ok' ? 'msg-ok' : 'msg-err'}`}>
              {message.text}
            </p>
          )}

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Ap anrejistre...' : 'CONTINUER'}
          </button>
        </form>
      </div>
    </main>
  )
}
