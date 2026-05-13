export default function CTA() {
  return (
    <section style={{ padding: '80px 24px', background: 'var(--bg)', textAlign: 'center' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 16 }}>
          Send an invoice that gets<br />you paid faster
        </h2>
        <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 32 }}>
          Join 12,000+ small businesses who get paid on time with GetPaid.
        </p>
        <a href="#" style={{ display: 'inline-block', padding: '15px 32px', background: 'var(--dark)', color: 'white', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginBottom: 48, letterSpacing: '-0.2px' }}>
          Start for free — no card needed
        </a>

        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 18 }}>Trusted by businesses worldwide</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            {['Alpha Studio', 'Spotify', 'Nour & Co.', 'Westbridge', 'Driftwood'].map(name => (
              <div key={name} style={{ padding: '9px 18px', borderRadius: 12, background: 'white', border: '1.5px solid #e2e8f0', fontSize: 13, fontWeight: 700, color: '#94a3b8' }}>{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
