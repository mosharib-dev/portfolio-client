import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

const roles = ['Full-Stack Developer', 'MERN Stack Developer', 'AI Enthusiast', 'Problem Solver']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      } else {
        setRoleIdx((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 clamp(1.5rem,5vw,4rem)',
      background: 'radial-gradient(ellipse at top left, rgba(79,142,247,0.08) 0%, transparent 60%)'
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%', paddingTop: '80px' }}>

        <p style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', fontSize: '0.85rem',
          marginBottom: '1.2rem', opacity: 0.9 }}>
          👋 Hi there, I'm
        </p>

        <h1 style={{ fontSize: 'clamp(2.8rem,8vw,5rem)', fontWeight: 700,
          lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Mohammad<br />
          <span style={{ color: 'var(--accent)' }}>Mosharib</span>
        </h1>

        <div style={{ height: '2.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: 'clamp(1.1rem,3vw,1.4rem)', color: 'var(--muted)', fontWeight: 500 }}>
            {displayed}
            <span style={{ borderRight: '2px solid var(--accent)', marginLeft: '2px',
              animation: 'blink 1s step-end infinite' }} />
          </span>
        </div>

        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: '520px',
          lineHeight: 1.8, marginBottom: '2.5rem' }}>
          B.Tech CSE (AI) student at Supaul College of Engineering with a CGPA of 8.99.
          I build full-stack web applications with the MERN stack and love solving real-world problems with code.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="#contact" onClick={e => {
            e.preventDefault()
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
            style={{ padding: '0.75rem 1.75rem', background: 'var(--accent)', color: '#fff',
              borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#3b7de8'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}>
            <Mail size={16} /> Get in Touch
          </a>
          <a href="https://github.com/mohammadmosharib" target="_blank" rel="noopener"
            style={{ padding: '0.75rem 1.75rem', background: 'transparent', color: 'var(--text)',
              border: '1.5px solid var(--border)', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
            <Github size={16} /> GitHub
          </a>
          <a href="https://linkedin.com/in/mohammadmosharib" target="_blank" rel="noopener"
            style={{ padding: '0.75rem 1.75rem', background: 'transparent', color: 'var(--text)',
              border: '1.5px solid var(--border)', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#0a66c2'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.4rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>scroll down</span>
          <ChevronDown size={18} color="var(--muted)" style={{ animation: 'bounce 2s infinite' }} />
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes bounce {
          0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)}
        }
      `}</style>
    </section>
  )
}
