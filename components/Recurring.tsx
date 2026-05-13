export default function Recurring() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-blue)', marginBottom: 14 }}>Recurring invoices</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 16 }}>
            Automatically sync transactions with zero subscriptions and fees
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 24 }}>
            Retainer clients? Monthly subscriptions? GetPaid sends, tracks, and collects automatically on any schedule you set.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['Weekly, monthly, or custom schedules', 'Auto-collects via saved card or bank transfer', 'Pause, edit, or cancel any time', 'Client notified automatically each cycle'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="8" cy="8" r="7" fill="var(--blue-tint)"/>
                  <path d="M5 8l2 2 4-4" stroke="var(--brand-blue)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Laptop mockup with dashboard */}
        <div style={{ position: 'relative' }}>
          {/* Laptop frame */}
          <div style={{ background: '#1a1a2e', borderRadius: '16px 16px 0 0', padding: '10px 10px 0', boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}>
            {/* Screen */}
            <div style={{ background: 'white', borderRadius: '8px 8px 0 0', overflow: 'hidden' }}>
              {/* Browser bar */}
              <div style={{ background: '#f1f5f9', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid #e2e8f0' }}>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#fc5c65' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#fed330' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#26de81' }} />
                <div style={{ flex: 1, maxWidth: 200, margin: '0 auto', background: 'white', borderRadius: 4, padding: '3px 10px', fontSize: 10, color: '#94a3b8', textAlign: 'center' }}>app.getpaid.io/recurring</div>
              </div>
              {/* Dashboard content */}
              <div style={{ padding: '16px 18px', background: '#f8fafc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--dark)' }}>Recurring invoices</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>Auto-billed each cycle</div>
                  </div>
                  <button style={{ background: 'var(--dark)', color: 'white', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>+ Add schedule</button>
                </div>

                <div style={{ background: 'white', borderRadius: 10, border: '1px solid #eef2f7', overflow: 'hidden' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 80px', padding: '8px 14px', background: '#f8fafc', borderBottom: '1px solid #f1f5f9', fontSize: 10, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <span>Client</span><span>Amount</span><span>Next billing</span><span style={{ textAlign: 'center' }}>Status</span>
                  </div>
                  {[
                    { client: 'Westbridge Media', amount: '$2,800', next: 'Jun 1', active: true },
                    { client: 'Nour & Partners', amount: '$1,500', next: 'Jun 1', active: true },
                    { client: 'Pinecrest Studio', amount: '$800', next: 'May 19', active: true },
                    { client: 'Driftwood Co.', amount: '$4,200', next: 'Jun 15', active: false },
                  ].map((row, i) => (
                    <div key={row.client} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 80px', padding: '10px 14px', borderBottom: i < 3 ? '1px solid #f8fafc' : 'none', alignItems: 'center', fontSize: 11 }}>
                      <span style={{ fontWeight: 600, color: 'var(--dark)' }}>{row.client}</span>
                      <span style={{ fontWeight: 700, color: 'var(--dark)' }}>{row.amount}</span>
                      <span style={{ color: 'var(--muted)' }}>{row.next}</span>
                      <span style={{ display: 'flex', justifyContent: 'center' }}>
                        <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 7px', borderRadius: 20, background: row.active ? 'var(--green-tint)' : '#f1f5f9', color: row.active ? 'var(--green)' : 'var(--muted)' }}>
                          {row.active ? 'Active' : 'Paused'}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, padding: '10px 14px', background: 'white', borderRadius: 8, border: '1px solid #eef2f7' }}>
                  <span style={{ fontSize: 11, color: 'var(--muted)' }}>Monthly auto-billed total</span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--dark)' }}>$9,300 / mo</span>
                </div>
              </div>
            </div>
          </div>
          {/* Laptop base */}
          <div style={{ background: '#111827', height: 8, borderRadius: '0 0 4px 4px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }} />
          <div style={{ background: '#0f172a', height: 4, borderRadius: '0 0 8px 8px', width: '110%', marginLeft: '-5%', marginTop: 0 }} />
        </div>
      </div>
    </section>
  );
}
