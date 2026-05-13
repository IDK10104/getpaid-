const rows = [
  { feature: 'Invoice creation', getpaid: true, other: true },
  { feature: 'Same-day payments', getpaid: true, other: false },
  { feature: 'Simple flat pricing', getpaid: true, other: false },
  { feature: 'No bookkeeping required', getpaid: true, other: false },
  { feature: 'Client payment portal', getpaid: true, other: false },
  { feature: 'Mobile-first design', getpaid: true, other: false },
  { feature: 'Automated reminders', getpaid: true, other: true },
  { feature: 'Requires monthly subscription', getpaid: false, other: true },
];

const Yes = () => (
  <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:26, height:26, borderRadius:'50%', background:'var(--green-tint)' }}>
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);
const No = () => (
  <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:26, height:26, borderRadius:'50%', background:'#f1f5f9' }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round"/></svg>
  </span>
);

export default function Comparison() {
  return (
    <section style={{ padding: '80px 24px', background: 'white' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-pink)', marginBottom: 12 }}>Why GetPaid</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 14 }}>
            Accounting platforms are a slow,<br />expensive way to invoice clients
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 440, margin: '0 auto' }}>
            You don't need full accounting software. You need to send invoices and get paid.
          </p>
        </div>

        <div style={{ borderRadius: 20, border: '1.5px solid #eef2f7', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px', background: '#f8fafc', borderBottom: '1.5px solid #eef2f7', padding: '14px 24px' }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Feature</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand-blue)', textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center' }}>GetPaid</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center' }}>Others</span>
          </div>
          {rows.map(({ feature, getpaid, other }, i) => (
            <div key={feature} style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px', padding: '14px 24px', alignItems: 'center', borderBottom: i < rows.length - 1 ? '1px solid #f1f5f9' : 'none', background: i % 2 === 0 ? 'white' : '#fafcfe' }}>
              <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{feature}</span>
              <span style={{ display: 'flex', justifyContent: 'center' }}>{getpaid ? <Yes /> : <No />}</span>
              <span style={{ display: 'flex', justifyContent: 'center' }}>{other ? <Yes /> : <No />}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href="#" style={{ display: 'inline-block', padding: '13px 28px', background: 'var(--dark)', color: 'white', borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
            Switch to GetPaid — it's free
          </a>
        </div>
      </div>
    </section>
  );
}
