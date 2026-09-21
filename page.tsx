import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="container">
      <div className="hero">
        <h1>
          SSP <span>CENTRAL</span>
        </h1>
        <p>Plateforme Centrale de Gestion et de Développement</p>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        <Link href="/inscription" className="btn btn-primary">
          S&apos;inscrire
        </Link>
        <Link href="/pdg" className="btn btn-outline">
          Espace Administration (PDG)
        </Link>
      </div>
    </main>
  )
}
