const features = [
  { color: 'var(--brand-blue)', tint: 'var(--blue-tint)', title: 'Professional invoices', desc: 'Beautiful, customisable invoice templates your clients will trust. Add your logo, brand colours, and payment terms in seconds.', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M2 7h16M5.5 12h5M5.5 14.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { color: 'var(--brand-pink)', tint: 'var(--pink-tint)', title: 'Instant payments', desc: 'Clients pay directly from the invoice via card or bank transfer. Funds land in your account the same day — no chasing needed.', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2v3M10 15v3M3.5 3.5l2 2M14.5 14.5l2 2M2 10h3M15 10h3M3.5 16.5l2-2M14.5 5.5l2-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg> },
  { color: 'var(--brand-purple)', tint: 'var(--purple-tint)', title: 'Client portal', desc: 'Each client gets a private portal where they can view all invoices, download receipts, and manage their payment methods.', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 9l7-6 7 6v8a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 17V9z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M7.5 18.5V12h5v6.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg> },
  { color: 'var(--green)', tint: 'var(--green-tint)', title: 'Recurring invoices', desc: 'Set up automated billing schedules for retainer clients. GetPaid sends, tracks, and collects — while you focus on the work.', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.7"/><path d="M10 6v4.5l2.5 2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { color: 'var(--brand-blue)', tint: 'var(--blue-tint)', title: 'Multi-device access', desc: 'Create and manage invoices from your phone, tablet, or desktop. Everything syncs in real time, so you\'re always up to date.', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7"/><path d="M7 17h6M14 8h3a1 1 0 011 1v6a1 1 0 01-1 1h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { color: 'var(--brand-pink)', tint: 'var(--pink-tint)', title: 'Smart reminders', desc: 'Automated payment reminders keep clients on track without awkward follow-up emails. Customise timing and tone.', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 016 6v3l1.5 2.5H2.5L4 11V8a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M7.5 15.5a2.5 2.5 0 005 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: '80px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-blue)', marginBottom: 12 }}>Features</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 14 }}>
            We designed an invoicer that works harder<br />for your business
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
            Every feature is designed around one goal: getting you paid on time, every time.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {features.map(f => (
            <div key={f.title} style={{ background: 'white', borderRadius: 20, padding: 28, border: '1px solid #eef2f7' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: f.tint, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--dark)', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:900px){#features-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:560px){#features-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
