export default function Footer() {
  return (
    <footer style={{
      padding: '2rem clamp(1.5rem,5vw,4rem)',
      borderTop: '1px solid var(--border)',
      display: 'flex', flexWrap: 'wrap', alignItems: 'center',
      justifyContent: 'space-between', gap: '1rem'
    }}>
      <span style={{ fontFamily: 'var(--mono)', color: 'var(--muted)', fontSize: '0.8rem' }}>
        &lt;Mosharib /&gt;
      </span>
      <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
        Designed & Built by{' '}
        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Mohammad Mosharib</span>
        {' '}· {new Date().getFullYear()}
      </span>
    </footer>
  )
}
