export default function Hero() {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 0, textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'white' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,152,242,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 14px', borderRadius: 100, background: 'var(--blue-tint)', color: 'var(--brand-blue)', fontSize: 12, fontWeight: 600, marginBottom: 28 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />
          Now with instant bank transfers
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-2px', color: 'var(--dark)', marginBottom: 22, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
          Small business invoices<br />
          <span style={{ color: 'var(--brand-blue)' }}>that get paid faster</span>
        </h1>

        <p style={{ fontSize: 18, color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.65 }}>
          Send professional invoices in seconds, accept payments instantly, and track everything — without the complexity.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
          <a href="#" style={{ padding: '14px 28px', background: 'var(--dark)', color: 'white', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            Start for free
          </a>
          <a href="#" style={{ padding: '14px 28px', background: 'white', color: 'var(--dark)', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1.5px solid #e2e8f0' }}>
            See how it works →
          </a>
        </div>

        {/* Trust line */}
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', fontSize: 13, color: 'var(--muted)', marginBottom: 56 }}>
          {['No credit card required', 'Free 14-day trial', 'Cancel anytime'].map(t => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {t}
            </span>
          ))}
        </div>

        {/* App preview screenshot */}
        <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto', borderRadius: '16px 16px 0 0', overflow: 'hidden', boxShadow: '0 -4px 60px rgba(0,0,0,0.12)', border: '1.5px solid #e8edf2', borderBottom: 'none' }}>
          {/* Browser chrome */}
          <div style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#fc5c65' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#fed330' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#26de81' }} />
            <div style={{ flex: 1, maxWidth: 320, margin: '0 auto', background: 'white', borderRadius: 6, padding: '4px 12px', fontSize: 11, color: '#94a3b8', textAlign: 'center' }}>
              app.getpaid.io/invoices
            </div>
          </div>
          {/* Dashboard UI */}
          <div style={{ background: '#f8fafc', padding: '0' }}>
            {/* Top nav */}
            <div style={{ background: 'white', borderBottom: '1px solid #f1f5f9', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 26, height: 26, borderRadius: 8, background: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="2.5" width="10" height="7.5" rx="1.2" fill="white" fillOpacity=".9"/><path d="M1 2.5L6 1l5 1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
                </div>
                <span style={{ fontWeight: 700, fontSize: 13, color: 'var(--dark)' }}>GetPaid</span>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['Dashboard', 'Invoices', 'Clients', 'Reports'].map(n => (
                  <span key={n} style={{ fontSize: 12, color: n === 'Invoices' ? 'var(--brand-blue)' : 'var(--muted)', fontWeight: n === 'Invoices' ? 600 : 400, padding: '4px 10px', borderRadius: 6, background: n === 'Invoices' ? 'var(--blue-tint)' : 'transparent' }}>{n}</span>
                ))}
              </div>
              <button style={{ background: 'var(--dark)', color: 'white', border: 'none', borderRadius: 8, padding: '6px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>+ New invoice</button>
            </div>
            {/* Stats row */}
            <div style={{ padding: '20px 24px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
              {[
                { label: 'Total revenue', val: '$48,200', change: '+12%', color: 'var(--green)' },
                { label: 'Paid invoices', val: '142', change: '+8%', color: 'var(--green)' },
                { label: 'Pending', val: '$6,400', change: '4 inv.', color: 'var(--brand-blue)' },
                { label: 'Avg. pay time', val: '1.2 days', change: '-40%', color: 'var(--green)' },
              ].map(s => (
                <div key={s.label} style={{ background: 'white', borderRadius: 12, padding: '14px 16px', border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.5px', marginBottom: 2 }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: s.color, fontWeight: 600 }}>{s.change}</div>
                </div>
              ))}
            </div>
            {/* Invoice table */}
            <div style={{ margin: '0 24px 0', background: 'white', borderRadius: 12, border: '1px solid #f1f5f9', overflow: 'hidden', marginBottom: 0 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 100px', padding: '10px 16px', background: '#f8fafc', borderBottom: '1px solid #f1f5f9', fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <span>Client</span><span>Amount</span><span>Date</span><span>Due</span><span style={{ textAlign: 'center' }}>Status</span>
              </div>
              {[
                { client: 'Hallmark Park Co.', amount: '$3,400', date: 'May 10', due: 'May 28', status: 'Paid', sc: 'var(--green)', sb: 'var(--green-tint)' },
                { client: 'Quinbrook Homes', amount: '$8,200', date: 'May 12', due: 'May 30', status: 'Viewed', sc: 'var(--brand-blue)', sb: 'var(--blue-tint)' },
                { client: 'Studio Raya', amount: '$1,950', date: 'May 13', due: 'Jun 1', status: 'Sent', sc: 'var(--muted)', sb: '#f1f5f9' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 100px', padding: '12px 16px', borderBottom: i < 2 ? '1px solid #f8fafc' : 'none', alignItems: 'center', fontSize: 12 }}>
                  <span style={{ fontWeight: 600, color: 'var(--dark)' }}>{row.client}</span>
                  <span style={{ fontWeight: 700, color: 'var(--dark)' }}>{row.amount}</span>
                  <span style={{ color: 'var(--muted)' }}>{row.date}</span>
                  <span style={{ color: 'var(--muted)' }}>{row.due}</span>
                  <span style={{ display: 'flex', justifyContent: 'center' }}>
                    <span style={{ fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 20, background: row.sb, color: row.sc }}>{row.status}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
