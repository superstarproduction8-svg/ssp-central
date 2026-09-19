export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '50px', color: '#facc15' }}>SSP CENTRAL</h1>
      <p style={{ fontSize: '20px', marginBottom: '30px' }}>Superstar Production</p>
      <div style={{ display: 'flex', gap: '15px' }}>
        <a href="/inscription" style={{ background: '#facc15', color: 'black', padding: '15px 30px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>Inscription</a>
        <a href="/pdg" style={{ border: '2px solid white', color: 'white', padding: '15px 30px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>PDG</a>
      </div>
    </div>
  );
}
