import { DesktopInvoiceMockup, MobileNotificationMockup } from './InvoiceMockup';

export default function ProductShowcase() {
  return (
    <>
      {/* Dark invoice section */}
      <section style={{ background: '#111827', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-blue)', marginBottom: 12 }}>Invoice design</p>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: 'white', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 16 }}>
              We designed a better invoice experience with lower fees
            </h2>
            <p style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.7, marginBottom: 28 }}>
              Clean, branded invoices your clients trust. One-click payment means fewer excuses and faster cash in your account.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['Branded templates', 'Upload your logo and set your brand colours in under 60 seconds.'],
                ['One-click pay', 'Clients pay via card, bank transfer, or Apple Pay — directly from the invoice.'],
                ['Instant confirmation', 'Both you and your client receive real-time payment receipts.'],
              ].map(([label, desc]) => (
                <div key={label} style={{ display: 'flex', gap: 12 }}>
                  <span style={{ flexShrink: 0, marginTop: 2, width: 18, height: 18, borderRadius: '50%', background: 'var(--green-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="var(--green)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <p style={{ fontSize: 14, color: '#94a3b8' }}><strong style={{ color: 'white' }}>{label} </strong>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Two invoice mockups side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <DesktopInvoiceMockup company="Hallmark Co." client="Quinbrook Homes" />
            <DesktopInvoiceMockup company="Studio Raya" client="Fold & Press Co." />
          </div>
        </div>
      </section>

      {/* Mobile notifications section */}
      <section style={{ background: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MobileNotificationMockup />
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-pink)', marginBottom: 12 }}>Stay in control</p>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 16 }}>
              Always know when you've been paid — wherever you are
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 28 }}>
              Real-time push notifications mean you never miss a payment or an invoice being opened. Track every client from your phone.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {['iOS & Android', 'Instant push alerts', 'Payment tracking', 'Read receipts'].map(tag => (
                <span key={tag} style={{ padding: '7px 14px', borderRadius: 20, border: '1.5px solid #e2e8f0', fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
