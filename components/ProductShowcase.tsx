import { DesktopInvoiceMockup, MobileNotificationMockup } from './InvoiceMockup';

export default function ProductShowcase() {
  return (
    <>
      {/* Invoice on desk — photo background section */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 600 }}>
        {/* Photo background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366754035-f200968a333e?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }} />
        {/* Overlay gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(17,24,39,0.5) 100%)' }} />

        <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-blue)', marginBottom: 14 }}>Invoice design</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: 'white', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 18 }}>
              We designed a faster invoice experience with lower fees
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 32 }}>
              Clean, branded invoices your clients trust. One-click payment means fewer excuses and faster cash in your account — with fees 3× lower than competitors.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['Branded templates', 'Upload your logo and brand colours in under 60 seconds.'],
                ['One-click pay', 'Card, bank transfer, or Apple Pay — directly from the invoice.'],
                ['Instant confirmation', 'Both you and your client get real-time payment receipts.'],
              ].map(([label, desc]) => (
                <div key={label} style={{ display: 'flex', gap: 12 }}>
                  <span style={{ flexShrink: 0, marginTop: 2, width: 18, height: 18, borderRadius: '50%', background: 'rgba(93,156,6,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="var(--green)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: 0 }}><strong style={{ color: 'white' }}>{label} — </strong>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Two invoice cards floating on the photo */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>
            <div style={{ transform: 'rotate(-2deg)', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}>
              <DesktopInvoiceMockup company="Hallmark Park Co." client="Quinbrook Homes" />
            </div>
            <div style={{ transform: 'rotate(1.5deg)', marginTop: 32, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}>
              <DesktopInvoiceMockup company="Studio Raya" client="Fold & Press Co." />
            </div>
          </div>
        </div>
      </section>

      {/* Phone on outdoor background */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 560 }}>
        {/* Photo background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center top',
          filter: 'brightness(0.45)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%)' }} />

        <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          {/* Phone mockup */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.6))' }}>
              <MobileNotificationMockup />
            </div>
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-pink)', marginBottom: 14 }}>Stay in control</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: 'white', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 18 }}>
              Always know when you've been paid — wherever you are
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 28 }}>
              Real-time push notifications mean you never miss a payment or an invoice being opened. Track every client from your phone, anywhere in the world.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {['iOS & Android', 'Instant push alerts', 'Payment tracking', 'Read receipts'].map(tag => (
                <span key={tag} style={{ padding: '7px 14px', borderRadius: 20, border: '1.5px solid rgba(255,255,255,0.2)', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
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
