const stats = [
  { value: '12k+', label: 'Businesses' },
  { value: '$2.4M', label: 'Paid out daily' },
  { value: '98%', label: 'On-time payments' },
  { value: '< 2min', label: 'To send invoice' },
];

export default function Testimonial() {
  return (
    <section style={{ padding: '64px 24px', background: 'white', textAlign: 'center' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 3, marginBottom: 20 }}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="var(--brand-blue)">
              <path d="M9 1l2.06 5.26L17 7.27l-4 3.9.94 5.38L9 13.77l-4.94 2.78.94-5.38-4-3.9 5.94-1.01L9 1z"/>
            </svg>
          ))}
        </div>

        <blockquote style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 600, color: 'var(--dark)', lineHeight: 1.5, marginBottom: 12 }}>
          "No matter how many invoices I send, once we switched to GetPaid our invoices done get paid 2–3X faster."
        </blockquote>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 56 }}>— Sarah K., freelance designer</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {stats.map(({ value, label }) => (
            <div key={label} style={{ padding: '24px 16px', background: 'var(--bg)', borderRadius: 16, border: '1px solid #eef2f7' }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--dark)', letterSpacing: '-1px', marginBottom: 4 }}>{value}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:600px){ .stats-grid{grid-template-columns:repeat(2,1fr)!important;} }`}</style>
    </section>
  );
}
