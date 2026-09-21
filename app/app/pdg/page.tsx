'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type Inscription = {
  id: number
  nom: string
  telephone: string
  branch: string
  statut: string
  created_at: string
}

export default function PDG() {
  const [data, setData] = useState<Inscription[]>([])
  const [loading, setLoading] = useState(true)

  // 1. Pran tout done yo sou Supabase (pa nan localStorage)
  async function loadData() {
    setLoading(true)
    const { data, error } = await supabase
      .from('inscriptions')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (!error && data) setData(data)
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  // 2. Chanje statut (Valide / Refize)
  async function updateStatut(id: number, nouveauStatut: string) {
    await supabase.from('inscriptions').update({ statut: nouveauStatut }).eq('id', id)
    loadData() // recharje
  }

  return (
    <div style={{ padding: '20px', background: '#0f172a', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ color: '#facc15', textAlign: 'center' }}>Espas PDG - Tout Done yo</h1>
      <p style={{ textAlign: 'center', opacity: 0.7 }}>Done yo soti sou Supabase • Ka kenbe plizyè milyon liy</p>
      
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={loadData} style={{ padding: '8px 16px', background: '#facc15', color: 'black', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>🔄 Actualize</button>
        <span style={{ marginLeft: '15px' }}>Total: {data.length} enskripsyon</span>
      </div>

      {loading ? <p style={{ textAlign: 'center' }}>Chajman...</p> : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr style={{ background: '#1e293b' }}>
                <th style={{ padding: '10px', border: '1px solid #334155' }}>Non</th>
                <th style={{ padding: '10px', border: '1px solid #334155' }}>Telefòn</th>
                <th style={{ padding: '10px', border: '1px solid #334155' }}>Branch</th>
                <th style={{ padding: '10px', border: '1px solid #334155' }}>Statut</th>
                <th style={{ padding: '10px', border: '1px solid #334155' }}>Aksyon</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: '10px', border: '1px solid #334155' }}>{item.nom}</td>
                  <td style={{ padding: '10px', border: '1px solid #334155' }}>{item.telephone}</td>
                  <td style={{ padding: '10px', border: '1px solid #334155' }}>{item.branch}</td>
                  <td style={{ padding: '10px', border: '1px solid #334155' }}>{item.statut}</td>
                  <td style={{ padding: '10px', border: '1px solid #334155' }}>
                    <button onClick={() => updateStatut(item.id, 'Valide')} style={{ background: '#22c55e', border: 'none', padding: '5px 8px', marginRight: '5px', cursor: 'pointer' }}>Valide</button>
                    <button onClick={() => updateStatut(item.id, 'Refize')} style={{ background: '#ef4444', border: 'none', padding: '5px 8px', cursor: 'pointer' }}>Refize</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <a href="/" style={{ color: '#facc15', display: 'block', marginTop: '30px', textAlign: 'center' }}>← Retounen Akèy</a>
    </div>
  )
}
