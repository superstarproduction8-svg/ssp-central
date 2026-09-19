export default function Inscription() {
  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ color: '#facc15' }}>Inscription</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <input placeholder="Non konplè" style={{ padding: '12px', borderRadius: '8px', border: 'none' }} />
        <input placeholder="Email" style={{ padding: '12px', borderRadius: '8px', border: 'none' }} />
        <input placeholder="Telefòn" style={{ padding: '12px', borderRadius: '8px', border: 'none' }} />
        <button style={{ background: '#facc15', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold' }}>Voye</button>
      </form>
      <a href="/" style={{ color: 'white', display: 'block', marginTop: '20px' }}>← Retounen Akèy</a>
    </div>
  );
}
