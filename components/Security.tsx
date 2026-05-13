const badges = [
  { color: 'var(--brand-blue)', tint: 'var(--blue-tint)', title: 'Bank-grade security', desc: '256-bit SSL encryption on all data, at rest and in transit.', icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 3L5 7v6c0 4.8 3.5 9.3 8 10.4C17.5 22.3 21 17.8 21 13V7L13 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9.5 13l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { color: 'var(--brand-purple)', tint: 'var(--purple-tint)', title: 'PCI DSS compliant', desc: 'Level 1 PCI DSS — the highest standard for card payments.', icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="5" y="11" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M9.5 11V8.5a3.5 3.5 0 017 0V11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><circle cx="13" cy="16.5" r="1.5" fill="currentColor"/></svg> },
  { color: 'var(--green)', tint: 'var(--green-tint)', title: '99.99% uptime SLA', desc: 'Redundant infrastructure so your invoices are always live.', icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="8.5" stroke="currentColor" strokeWidth="1.7"/><path d="M13 8v5.5l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg> },
];

export default function Security() {
  return (
    <section style={{ padding: '80px 24px', background: 'white' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-purple)', marginBottom: 12 }}>Security & compliance</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 14 }}>
            Security and compliance in first place
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 440, margin: '0 auto' }}>
            Your financial data and clients' payment info are protected by industry-leading standards.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 48 }}>
          {badges.map(({ color, tint, title, desc, icon }) => (
            <div key={title} style={{ background: 'var(--bg)', borderRadius: 20, padding: '28px 24px', border: '1px solid #eef2f7', textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: tint, color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                {icon}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--dark)', marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Powered by trusted infrastructure</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            {['Stripe', 'Plaid', 'AWS', 'Twilio'].map(p => (
              <div key={p} style={{ padding: '10px 24px', borderRadius: 12, border: '1.5px solid #e2e8f0', background: 'white', fontSize: 13, fontWeight: 700, color: '#94a3b8' }}>{p}</div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:700px){.sec-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
