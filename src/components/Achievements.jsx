const achievements = [
  {icon: '🏆',title: 'Consistent Academic Topper (Semesters 1–4)',sub: 'Rank 1 in CSE (AI) branch and College Topper in multiple semesters'}
  { icon: '🏆', title: 'University Rank 1 – Semester 4', sub: 'Top across branch at university level' },
  { icon: '🎯', title: '1st Rank – College Coding Contest', sub: 'Organized by College Coding Club' },
  { icon: '🎓', title: 'Scholarship for Academic Excellence', sub: 'Awarded for outstanding performance in 12th grade' },
  { icon: '💻', title: '100+ DSA Problems Solved', sub: 'LeetCode · GeeksforGeeks · CodeChef · HackerRank' },
  { icon: '🔐', title: 'C-DAC Noida Internship', sub: 'Ethical Hacking & Penetration Testing · Ministry of Electronics & IT' },
]

const certifications = [
  { name: 'Cybersecurity Essentials', org: 'Cisco Networking Academy' },
  { name: 'Python Essentials', org: 'Cisco Networking Academy' },
  { name: 'CPP Essentials', org: 'Cisco Networking Academy' },
  { name: 'Advanced C++ Training', org: 'Spoken Tutorial Project, IIT Bombay' },
  { name: 'Introduction to Computers', org: 'Spoken Tutorial Project, IIT Bombay' },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '5rem clamp(1.5rem,5vw,4rem)' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
          05. achievements
        </p>
        <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700, marginBottom: '3rem' }}>
          Highlights & Certifications
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '3rem' }}>
          {/* Achievements */}
          <div>
            <h3 style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--mono)',
              textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              Achievements
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {achievements.map((a, i) => (
                <div key={i} style={{
                  background: 'var(--bg2)', border: '1px solid var(--border)',
                  borderRadius: '10px', padding: '1rem 1.1rem',
                  display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                  transition: 'border-color 0.2s'
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                  <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{a.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.15rem' }}>
                      {a.title}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{a.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--mono)',
              textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              Certifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {certifications.map((c, i) => (
                <div key={i} style={{
                  background: 'var(--bg2)', border: '1px solid var(--border)',
                  borderRadius: '10px', padding: '1rem 1.1rem',
                  borderLeft: '3px solid var(--accent)',
                  transition: 'box-shadow 0.2s'
                }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 0 1px rgba(79,142,247,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.15rem' }}>
                    {c.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent)' }}>{c.org}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
