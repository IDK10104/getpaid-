'use client';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e8edf2',
    }}>
      <style>{`
        .nav-link { font-size:14px; font-weight:500; color:var(--text-secondary); text-decoration:none; transition:color 0.15s; }
        .nav-link:hover { color:var(--dark); }
        .nav-login { font-size:13px; font-weight:500; color:var(--dark); text-decoration:none; padding:8px 14px; border-radius:8px; transition:background 0.15s; }
        .nav-login:hover { background:#f3f4f6; }
        .nav-cta { font-size:13px; font-weight:600; color:white; background:var(--dark); padding:8px 16px; border-radius:8px; text-decoration:none; transition:opacity 0.15s; }
        .nav-cta:hover { opacity:0.85; }
        .mobile-menu-link { display:block; padding:10px 0; font-size:15px; font-weight:500; color:var(--text-secondary); text-decoration:none; border-bottom:1px solid #f3f4f6; }
        @media(max-width:768px){ .desktop-nav { display:none !important; } .mobile-burger { display:block !important; } }
      `}</style>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <rect x="1.5" y="3.5" width="12" height="9" rx="1.5" fill="white" fillOpacity=".9"/>
              <path d="M1.5 3.5L7.5 1.5l6 2" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
              <path d="M4 7.5h5M4 9.5h3" stroke="var(--brand-blue)" strokeWidth="1.1" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--dark)', letterSpacing: '-0.3px' }}>GetPaid</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {['Features', 'Pricing', 'FAQ', 'Blog'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="desktop-nav">
          <a href="#" className="nav-login">Log in</a>
          <a href="#" className="nav-cta">Get started free</a>
        </div>

        <button onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          className="mobile-burger"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open
              ? <path d="M4 4l14 14M18 4L4 18" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              : <path d="M3 6h16M3 11h16M3 16h16" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ background: 'white', borderTop: '1px solid #e8edf2', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {['Features', 'Pricing', 'FAQ', 'Blog'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="mobile-menu-link" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 14 }}>
            <a href="#" style={{ textAlign: 'center', padding: 10, borderRadius: 8, background: '#f7f7f7', fontSize: 14, fontWeight: 500, color: 'var(--dark)', textDecoration: 'none' }}>Log in</a>
            <a href="#" style={{ textAlign: 'center', padding: 10, borderRadius: 8, background: 'var(--dark)', fontSize: 14, fontWeight: 600, color: 'white', textDecoration: 'none' }}>Get started free</a>
          </div>
        </div>
      )}
    </nav>
  );
}
