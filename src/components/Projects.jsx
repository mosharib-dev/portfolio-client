import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'WanderLust',
    subtitle: 'Full Stack Travel Listing Platform',
    description:
      'An Airbnb-inspired platform with full CRUD, category-based filtering, secure authentication, and interactive GeoJSON maps. Includes a booking system with date conflict detection, PDF ticket generation, and email confirmation.',
    tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Passport.js', 'Cloudinary', 'Mapbox GL JS', 'PDFKit', 'Nodemailer', 'EJS', 'Bootstrap 5'],
    live: 'https://wanderlust-project-dr7b.onrender.com/',
    github: 'https://github.com/mosharib-dev/wanderlust-project',
    color: '#4f8ef7',
    highlights: ['Full CRUD + category filtering', 'Secure auth via Passport.js', 'Cloudinary image storage', 'PDF tickets + email confirmation'],
  },
  {
    title: 'BankEase',
    subtitle: 'Multi-Role Bank Management System',
    description:
      'A full-stack banking system with 4 role-based dashboards — Manager, Account Creator, Cashier, and Updater. Features KYC workflow, multi-level freeze request approval, auto EMI deduction via node-cron, and complete loan management.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'REST API', 'node-cron'],
    live: '#',
    github: '#',
    color: '#7c3aed',
    highlights: ['4 role-based dashboards', 'KYC & freeze approval chain', 'Auto EMI via node-cron', '48 customers · 17 loans · 620 transactions'],
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: '5rem clamp(1.5rem,5vw,4rem)',
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
          04. projects
        </p>
        <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700, marginBottom: '3rem' }}>
          Things I've Built
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((proj, i) => (
            <div key={i} style={{
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: '14px', overflow: 'hidden',
              borderLeft: `3px solid ${proj.color}`
            }}>
              {/* Header */}
              <div style={{
                padding: '1.5rem 1.5rem 0',
                display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start',
                justifyContent: 'space-between', gap: '1rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)' }}>{proj.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: proj.color, fontWeight: 500, marginTop: '0.15rem' }}>{proj.subtitle}</p>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <a href={proj.github} target="_blank" rel="noopener"
                    style={{ padding: '0.4rem 0.9rem', background: 'var(--bg2)', border: '1px solid var(--border)',
                      borderRadius: '7px', color: 'var(--muted)', fontSize: '0.8rem', display: 'flex', alignItems: 'center',
                      gap: '0.4rem', transition: 'all 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                    <Github size={14} /> Code
                  </a>
                  <a href={proj.live} target="_blank" rel="noopener"
                    style={{ padding: '0.4rem 0.9rem', background: proj.color, border: `1px solid ${proj.color}`,
                      borderRadius: '7px', color: '#fff', fontSize: '0.8rem', display: 'flex', alignItems: 'center',
                      gap: '0.4rem' }}>
                    <ExternalLink size={14} /> Live
                  </a>
                </div>
              </div>

              <div style={{ padding: '1rem 1.5rem' }}>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  {proj.description}
                </p>

                {/* Highlights */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {proj.highlights.map(h => (
                    <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--muted)' }}>
                      <span style={{ color: proj.color, fontSize: '1rem' }}>▸</span> {h}
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {proj.tech.map(t => (
                    <span key={t} style={{
                      fontSize: '0.75rem', padding: '0.2rem 0.6rem',
                      background: 'var(--bg2)', border: '1px solid var(--border)',
                      borderRadius: '5px', color: 'var(--muted)', fontFamily: 'var(--mono)'
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
