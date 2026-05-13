const C = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', ...style }}>{children}</div>
);

export default function Hero() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,152,242,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <C>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 100, background: 'var(--blue-tint)', color: 'var(--brand-blue)', fontSize: 12, fontWeight: 600, marginBottom: 28, letterSpacing: '0.01em' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />
          Now with instant bank transfers
        </div>

        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', color: 'var(--dark)', marginBottom: 24, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          Small business invoices<br />
          <span style={{ color: 'var(--brand-blue)' }}>that get paid faster</span>
        </h1>

        <p style={{ fontSize: 18, color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.65 }}>
          Send professional invoices in seconds, accept payments instantly, and track everything — without the accounting software complexity.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          <a href="#" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--dark)', color: 'white', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none', letterSpacing: '-0.2px' }}>
            Start for free
          </a>
          <a href="#" style={{ display: 'inline-block', padding: '14px 28px', background: 'white', color: 'var(--dark)', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1.5px solid #e2e8f0' }}>
            See how it works →
          </a>
        </div>

        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', fontSize: 13, color: 'var(--muted)' }}>
          {['No credit card required', 'Free 14-day trial', 'Cancel anytime'].map(t => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7l3 3 6-6" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t}
            </span>
          ))}
        </div>
      </C>
    </section>
  );
}
