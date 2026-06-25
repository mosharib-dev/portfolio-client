const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'Java', 'C', 'C++', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Bootstrap 5', 'Tailwind CSS', 'EJS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API', 'Passport.js'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'MongoDB Atlas', 'Mongoose ODM'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Render', 'Cloudinary', 'Mapbox GL JS'],
  },
  {
    category: 'Core CS',
    skills: ['DSA', 'OOP', 'OS', 'DBMS', 'Computer Networks'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '5rem clamp(1.5rem,5vw,4rem)',
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
          02. technical skills
        </p>
        <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700, marginBottom: '3rem' }}>
          What I Know
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1.5rem' }}>
          {skillGroups.map(({ category, skills }) => (
            <div key={category} style={{
              background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem'
            }}>
              <h3 style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--mono)',
                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                {category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.map(skill => (
                  <span key={skill} style={{
                    padding: '0.3rem 0.75rem',
                    background: 'var(--bg2)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    color: 'var(--text)',
                    transition: 'all 0.2s',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      e.target.style.borderColor = 'var(--accent)'
                      e.target.style.color = 'var(--accent)'
                    }}
                    onMouseLeave={e => {
                      e.target.style.borderColor = 'var(--border)'
                      e.target.style.color = 'var(--text)'
                    }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
