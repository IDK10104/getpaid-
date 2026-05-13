export default function Recurring() {
  return (
    <section style={{ padding: '80px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-blue)', marginBottom: 12 }}>Recurring invoices</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 16 }}>
            Automate your monthly billing — set it once, collect forever
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
            Retainer clients? Monthly subscriptions? GetPaid sends, tracks, and collects automatically. No manual work, no missed invoices.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Weekly, monthly, or custom schedules', 'Auto-collects on schedule via saved card or bank', 'Pause, edit, or cancel any time', 'Client notified automatically on each cycle'].map(item => (
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

        <div style={{ background: 'white', borderRadius: 20, border: '1.5px solid #eef2f7', overflow: 'hidden' }}>
          <div style={{ padding: '18px 22px', borderBottom: '1px solid #eef2f7' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)', marginBottom: 2 }}>Active recurring invoices</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Auto-billed each cycle</div>
          </div>
          {[
            { client: 'Westbridge Media', amount: '$2,800', cycle: 'Monthly', next: 'Jun 1', active: true },
            { client: 'Nour & Partners', amount: '$1,500', cycle: 'Monthly', next: 'Jun 1', active: true },
            { client: 'Pinecrest Studio', amount: '$800', cycle: 'Weekly', next: 'May 19', active: true },
            { client: 'Driftwood Co.', amount: '$4,200', cycle: 'Monthly', next: 'Jun 15', active: false },
          ].map(({ client, amount, cycle, next, active }) => (
            <div key={client} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px', borderBottom: '1px solid #f8fafc' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--dark)', marginBottom: 2 }}>{client}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>{cycle} · Next: {next}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--dark)' }}>{amount}</span>
                <span style={{ fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 20, background: active ? 'var(--green-tint)' : '#f1f5f9', color: active ? 'var(--green)' : 'var(--muted)' }}>
                  {active ? 'Active' : 'Paused'}
                </span>
              </div>
            </div>
          ))}
          <div style={{ padding: '14px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc' }}>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>Monthly auto-billed total</span>
            <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--dark)' }}>$9,300 / mo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
