export default function CTA() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 24px' }}>
      {/* Grass/outdoor photo background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.4) saturate(0.8)',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />

      <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: 'white', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 16 }}>
          Send an invoice that gets<br />you paid faster
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', marginBottom: 36 }}>
          Join 12,000+ small businesses who get paid on time with GetPaid.
        </p>
        <a href="#" style={{ display: 'inline-block', padding: '15px 36px', background: 'var(--dark)', color: 'white', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginBottom: 56 }}>
          Start for free — no card needed
        </a>

        {/* Brand logo cards floating on the photo */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
            Trusted by businesses worldwide
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            {[
              { name: 'Alpha Studio', color: '#1a1a2e' },
              { name: 'Spotify', color: '#1DB954' },
              { name: 'Nour & Co.', color: '#004370' },
              { name: 'Westbridge', color: '#6c56fc' },
              { name: 'Driftwood', color: '#1a1a2e' },
            ].map(({ name, color }) => (
              <div key={name} style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(8px)',
                borderRadius: 12,
                padding: '12px 22px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                transform: 'rotate(' + (Math.random() > 0.5 ? 1.5 : -1.5) + 'deg)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
