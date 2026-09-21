'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

type Inscription = {
  id: string
  created_at: string
  nom: string
  prenom: string
  email: string | null
  telephone: string
  type: string
  code_referent: string | null
  statut: string
}

export default function PdgPage() {
  const [rows, setRows] = useState<Inscription[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function loadInscriptions() {
    setLoading(true)
    setError(null)

    const { data, error } = await supabase
      .from('inscriptions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error(error)
      setError(error.message)
      setLoading(false)
      return
    }

    setRows((data as Inscription[]) || [])
    setLoading(false)
  }

  useEffect(() => {
    loadInscriptions()
  }, [])

  async function updateStatut(id: string, statut: string) {
    const { error } = await supabase.from('inscriptions').update({ statut }).eq('id', id)
    if (error) {
      console.error(error)
      setError(error.message)
      return
    }
    // Rechaje lis la dirèkteman sou Supabase apre chanjman an
    loadInscriptions()
  }

  return (
    <main className="container" style={{ maxWidth: '900px' }}>
      <Link href="/" className="back-link">
        ← Retour
      </Link>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>👑 Espace Administration — PDG</h2>
        <p style={{ fontSize: '0.85rem', color: '#5c6478' }}>
          Tout enskripsyon yo, li dirèkteman nan tab Supabase <code>inscriptions</code>.
        </p>

        {loading && <p className="msg">Chajman...</p>}
        {error && <p className="msg msg-err">Erè: {error}</p>}

        {!loading && !error && (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Téléphone</th>
                  <th>Type</th>
                  <th>Référent</th>
                  <th>Statut</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={8}>Pa gen enskripsyon ankò.</td>
                  </tr>
                )}
                {rows.map((r) => (
                  <tr key={r.id}>
                    <td>{r.nom}</td>
                    <td>{r.prenom}</td>
                    <td>{r.telephone}</td>
                    <td>{r.type}</td>
                    <td>{r.code_referent || '—'}</td>
                    <td>
                      <span
                        className={`badge ${
                          r.statut === 'Actif' ? 'badge-actif' : 'badge-attente'
                        }`}
                      >
                        {r.statut}
                      </span>
                    </td>
                    <td>{new Date(r.created_at).toLocaleDateString('fr-HT')}</td>
                    <td>
                      {r.statut !== 'Actif' && (
                        <button
                          className="btn btn-primary"
                          style={{ width: 'auto', padding: '0.35rem 0.7rem', fontSize: '0.75rem' }}
                          onClick={() => updateStatut(r.id, 'Actif')}
                        >
                          Valider
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}
