export function DesktopInvoiceMockup({ company, client }: { company: string; client: string }) {
  return (
    <div style={{ background: 'white', borderRadius: 16, border: '1.5px solid #e2e8f0', overflow: 'hidden', width: '100%', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
      {/* Browser bar */}
      <div style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#fc5c65' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#fed330' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#26de81' }} />
        <div style={{ flex: 1, marginLeft: 8, height: 18, background: '#e2e8f0', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
          <span style={{ fontSize: 9, color: '#94a3b8' }}>invoice.getpaid.io/pay/INV-089</span>
        </div>
      </div>
      {/* Invoice body */}
      <div style={{ padding: '20px 22px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', color: 'var(--brand-blue)', textTransform: 'uppercase', marginBottom: 2 }}>Invoice</div>
            <div style={{ fontSize: 10, color: 'var(--muted)' }}>#INV-2024-089</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--dark)' }}>{company}</div>
            <div style={{ fontSize: 10, color: 'var(--muted)' }}>hello@getpaid.io</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, fontSize: 10 }}>
          <div><div style={{ color: 'var(--muted)', marginBottom: 2 }}>Bill to</div><div style={{ fontWeight: 600, color: 'var(--dark)' }}>{client}</div></div>
          <div style={{ textAlign: 'right' }}><div style={{ color: 'var(--muted)', marginBottom: 2 }}>Due date</div><div style={{ fontWeight: 600, color: 'var(--dark)' }}>May 28, 2024</div></div>
        </div>

        <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid #eef2f7', marginBottom: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 70px', background: '#f8fafc', padding: '7px 12px', fontSize: 9, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            <span>Description</span><span style={{ textAlign: 'center' }}>Qty</span><span style={{ textAlign: 'right' }}>Amount</span>
          </div>
          {[['Brand design', '1', '$2,400'], ['Revisions', '3', '$600'], ['Rush delivery', '1', '$400']].map(([d, q, a]) => (
            <div key={d} style={{ display: 'grid', gridTemplateColumns: '1fr 40px 70px', padding: '7px 12px', borderTop: '1px solid #f1f5f9', fontSize: 10 }}>
              <span style={{ color: 'var(--dark)' }}>{d}</span>
              <span style={{ textAlign: 'center', color: 'var(--muted)' }}>{q}</span>
              <span style={{ textAlign: 'right', fontWeight: 600, color: 'var(--dark)' }}>{a}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <span style={{ fontSize: 11, color: 'var(--muted)' }}>Total due</span>
          <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.5px' }}>$3,400.00</span>
        </div>

        <button style={{ width: '100%', padding: '10px', background: 'var(--dark)', color: 'white', border: 'none', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
          Pay now →
        </button>
      </div>
    </div>
  );
}

export function MobileNotificationMockup() {
  const notifications = [
    { icon: '💸', title: 'Payment received!', body: 'Hallmark Co. paid $3,400 — INV-089', color: 'var(--brand-blue)', time: 'now' },
    { icon: '👁️', title: 'Invoice viewed', body: 'Quinbrook Homes opened INV-090', color: 'var(--green)', time: '2m ago' },
    { icon: '⏰', title: 'Reminder sent', body: 'Auto-reminder sent to 3 clients', color: 'var(--brand-pink)', time: '1h ago' },
  ];

  return (
    <div style={{ width: 220, background: '#111', borderRadius: 40, border: '6px solid #2a2a2a', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5)', flexShrink: 0 }}>
      {/* Notch */}
      <div style={{ background: '#111', height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 60, height: 16, background: '#000', borderRadius: 10 }} />
      </div>
      {/* Screen */}
      <div style={{ background: '#1c1c1e', padding: '8px 12px 20px', minHeight: 340 }}>
        <div style={{ textAlign: 'center', color: '#98989f', fontSize: 28, fontWeight: 200, marginBottom: 2 }}>9:41</div>
        <div style={{ textAlign: 'center', color: '#636366', fontSize: 11, marginBottom: 20 }}>Wednesday, May 13</div>
        {notifications.map((n, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: 14, padding: '10px 12px', marginBottom: 8, border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: n.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><rect x="1" y="2" width="8" height="6" rx="1" fill="white" fillOpacity=".9"/></svg>
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, color: 'white', flex: 1 }}>GetPaid</span>
              <span style={{ fontSize: 9, color: '#636366' }}>{n.time}</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'white', marginBottom: 2 }}>{n.title}</div>
            <div style={{ fontSize: 10, color: '#98989f', lineHeight: 1.4 }}>{n.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
