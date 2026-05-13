'use client';
import { useState } from 'react';

const items = [
  { q: 'Is GetPaid really free to start?', a: 'Yes — send up to 5 invoices per month completely free, forever. No credit card needed. Paid plans unlock unlimited invoices, recurring billing, and priority support.' },
  { q: 'How quickly do I receive payments?', a: 'Most payments settle the same day. Bank transfers typically arrive within a few hours; card payments settle same-day if initiated before 3 PM in your timezone.' },
  { q: 'What payment methods can my clients use?', a: 'Credit/debit card, bank transfer (ACH/SEPA), Apple Pay, and Google Pay — all from the same invoice link.' },
  { q: 'Can I customise invoices with my brand?', a: 'Absolutely. Upload your logo, choose brand colours, set custom payment terms, and add personalised notes. Your invoices will look like they came from your own billing system.' },
  { q: 'Is my data secure?', a: 'Yes. 256-bit SSL encryption, PCI DSS Level 1 compliant, and we never store full card numbers. Payments are processed by Stripe — one of the world\'s most trusted processors.' },
  { q: 'Can I cancel my subscription at any time?', a: 'Yes, cancel any time from your dashboard — no questions asked. You\'ll keep access until the end of your billing period.' },
  { q: 'Does GetPaid work for international clients?', a: 'Yes. We support 30+ currencies and payments from clients in 60+ countries. Currency conversion is handled automatically.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '80px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-blue)', marginBottom: 12 }}>FAQ</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-1px' }}>
            Frequently asked questions
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map(({ q, a }, i) => (
            <div key={i} style={{ borderRadius: 16, border: '1.5px solid #eef2f7', background: open === i ? 'white' : '#f8fafc', overflow: 'hidden' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--dark)', flex: 1 }}>{q}</span>
                <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: open === i ? 'var(--dark)' : 'var(--blue-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s', transform: open === i ? 'rotate(45deg)' : 'none' }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 2v6M2 5h6" stroke={open === i ? 'white' : 'var(--brand-blue)'} strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '0 22px 20px', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
