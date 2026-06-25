import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(15,17,23,0.95)' : 'rgba(15,17,23,0.0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'background 0.3s, border-bottom 0.3s, backdrop-filter 0.3s',
        padding: '0 clamp(1.5rem,5vw,4rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        <span style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500 }}>
          &lt;Mosharib /&gt;
        </span>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}
          className="nav-desktop">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)}
                style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer',
                  fontSize: '0.875rem', fontWeight: 500, fontFamily: 'var(--sans)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >{l}</button>
            </li>
          ))}
          <li>
            <a href="/admin/login"
              style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--mono)',
                padding: '0.35rem 0.75rem', border: '1px solid var(--border)', borderRadius: '6px' }}>
              admin
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}
          className="nav-mobile-btn">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown — outside nav so it doesn't affect nav height */}
      {open && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 999,
          background: 'var(--bg2)', borderBottom: '1px solid var(--border)',
          padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem',
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer',
                fontSize: '1rem', textAlign: 'left', fontFamily: 'var(--sans)', padding: '0.25rem 0' }}>
              {l}
            </button>
          ))}
          <a href="/admin/login"
            style={{ fontSize: '0.85rem', color: 'var(--muted)', fontFamily: 'var(--mono)', paddingTop: '0.25rem' }}>
            admin →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
