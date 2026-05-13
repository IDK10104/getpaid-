const links: Record<string, string[]> = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  Support: ['Help Centre', 'Status', 'Contact', 'API Docs'],
};

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #e8edf2', background: 'white', padding: '56px 24px 32px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="1" y="3" width="11" height="8" rx="1.5" fill="white" fillOpacity=".9"/>
                  <path d="M1 3L6.5 1l5.5 2" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--dark)' }}>GetPaid</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 16, maxWidth: 200 }}>
              The invoicing tool built for small businesses that want to get paid.
            </p>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--dark)', marginBottom: 16 }}>{heading}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="footer-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #eef2f7', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, fontSize: 12, color: 'var(--muted)' }}>
          <span>© 2024 GetPaid, Inc. All rights reserved.</span>
          <span>Made with care for small businesses</span>
        </div>
      </div>

      <style>{`
        .footer-link { font-size: 13px; color: var(--muted); text-decoration: none; }
        .footer-link:hover { color: var(--dark); }
        @media(max-width:800px){ .footer-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </footer>
  );
}
