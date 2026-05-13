export default function SameDay() {
  return (
    <section style={{ padding: '80px 24px', background: 'var(--bg)' }}>
      <div className="sameday-grid" style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-purple)', marginBottom: 12 }}>Same-day payments</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 16 }}>
            Stop waiting days for money that's already yours
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 32 }}>
            Traditional invoice tools take 3–5 business days to settle. GetPaid connects directly to your bank so funds arrive the same day.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { val: 'Same day', label: 'Settlement', color: 'var(--brand-blue)' },
              { val: '0.9%', label: 'Transaction fee', color: 'var(--brand-purple)' },
              { val: '150+', label: 'Supported banks', color: 'var(--brand-pink)' },
              { val: '256-bit', label: 'Encryption', color: 'var(--green)' },
            ].map(({ val, label, color }) => (
              <div key={label} style={{ background: 'white', borderRadius: 16, padding: '18px 20px', border: '1px solid #eef2f7' }}>
                <div style={{ fontSize: 22, fontWeight: 800, color, letterSpacing: '-0.5px', marginBottom: 2 }}>{val}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: 20, border: '1.5px solid #eef2f7', overflow: 'hidden' }}>
          <div style={{ padding: '18px 22px', borderBottom: '1px solid #eef2f7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)' }}>Payment timeline</span>
            <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: 'var(--green-tint)', color: 'var(--green)' }}>● Live</span>
          </div>
          <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: 22 }}>
            {[
              { time: '10:32 AM', event: 'Invoice #091 sent to Riverside Co.', color: 'var(--brand-blue)' },
              { time: '11:05 AM', event: 'Riverside Co. opened the invoice', color: 'var(--brand-purple)' },
              { time: '11:18 AM', event: 'Payment of $5,200 initiated by client', color: 'var(--brand-pink)' },
              { time: '11:21 AM', event: '$5,200 landed in your bank account ✓', color: 'var(--green)' },
            ].map(({ time, event, color }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ flexShrink: 0, width: 10, height: 10, borderRadius: '50%', background: color, marginTop: 4 }} />
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--dark)', marginBottom: 2 }}>{event}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:860px){.sameday-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
