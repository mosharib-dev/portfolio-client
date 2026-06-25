const experiences = [
  {
    role: 'Summer Entrepreneurship Intern – Web Design',
    company: 'Edulogy Institute',
    period: 'Mar 2026 – Apr 2026',
    badge: 'Grade A++',
    badgeColor: '#22c55e',
    tags: ['HTML', 'CSS', 'JavaScript'],
    points: [
      'Completed 6-week online program in Web Design; awarded Grade A++',
      'Built a fully responsive personal portfolio website with smooth scroll navigation and project showcase',
      'Developed an interactive product landing page with CSS animations, flexbox/grid, and dynamic JS content',
      'Implemented DOM manipulation projects: to-do list app, image slider, and form validation module',
    ],
  },
  {
    role: 'Virtual Intern – Ethical Hacking & Penetration Testing',
    company: 'Cyber Gyan Project, C-DAC Noida',
    period: 'Jan 2025 – Mar 2025',
    badge: 'Govt. of India',
    badgeColor: '#f59e0b',
    tags: ['Cybersecurity', 'Network Security', 'Penetration Testing'],
    points: [
      'Gained structured exposure to network vulnerabilities, threat modeling, and attack surface analysis',
      'Trained under Ministry of Electronics & IT, Government of India (C-DAC Noida)',
      'Learned secure system design: input validation, session management, and safe data handling',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '5rem clamp(1.5rem,5vw,4rem)' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
          03. work experience
        </p>
        <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700, marginBottom: '3rem' }}>
          Where I've Worked
        </h2>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: '7px', top: '8px', bottom: '0',
            width: '2px', background: 'var(--border)'
          }} />

          {experiences.map((exp, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: '2.5rem' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '-1.8rem', top: '6px',
                width: '12px', height: '12px', borderRadius: '50%',
                background: 'var(--accent)', border: '2px solid var(--bg)',
                boxShadow: '0 0 0 3px rgba(79,142,247,0.2)'
              }} />

              <div style={{
                background: 'var(--bg2)', border: '1px solid var(--border)',
                borderRadius: '12px', padding: '1.5rem'
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start',
                  justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.2rem' }}>
                      {exp.role}
                    </h3>
                    <p style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 500 }}>{exp.company}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--muted)', fontFamily: 'var(--mono)', whiteSpace: 'nowrap' }}>
                      {exp.period}
                    </span>
                    <span style={{
                      fontSize: '0.72rem', padding: '0.2rem 0.6rem',
                      background: `${exp.badgeColor}22`, color: exp.badgeColor,
                      border: `1px solid ${exp.badgeColor}44`, borderRadius: '20px', fontWeight: 600
                    }}>
                      {exp.badge}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {exp.tags.map(t => (
                    <span key={t} style={{
                      fontSize: '0.75rem', padding: '0.2rem 0.6rem',
                      background: 'rgba(79,142,247,0.1)', color: 'var(--accent)',
                      borderRadius: '5px', border: '1px solid rgba(79,142,247,0.2)'
                    }}>{t}</span>
                  ))}
                </div>

                <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.points.map((p, j) => (
                    <li key={j} style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
