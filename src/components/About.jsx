import { GraduationCap, MapPin, Code2, Brain } from 'lucide-react'

const stats = [
  { label: 'CGPA', value: '8.99' },
  { label: 'DSA Problems', value: '100+' },
  { label: 'Projects', value: '5+' },
  { label: 'Internships', value: '2' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem clamp(1.5rem,5vw,4rem)' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
          01. about me
        </p>
        <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700, marginBottom: '3rem' }}>
          Who I Am
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '3rem' }}>
          <div>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              I'm a final-year B.Tech student in Computer Science & Engineering (AI) at Supaul College of Engineering, Bihar.
              I'm passionate about building web applications that are functional, fast, and user-friendly.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              My focus is on the <strong style={{ color: 'var(--text)' }}>MERN stack</strong> — building everything from
              RESTful APIs and database schemas to interactive React frontends. I've also explored cybersecurity through
              a government-affiliated internship at C-DAC Noida.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9 }}>
              Outside of web dev, I enjoy solving DSA problems, participating in college coding contests, and learning
              how AI can be woven into everyday applications.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: <GraduationCap size={15} />, text: 'Supaul College of Engineering, Bihar' },
                { icon: <MapPin size={15} />, text: 'Bihar, India' },
                { icon: <Code2 size={15} />, text: 'Full-Stack MERN Developer' },
                { icon: <Brain size={15} />, text: 'AI & Cybersecurity enthusiast' },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--accent)' }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignContent: 'start' }}>
            {stats.map(({ label, value }) => (
              <div key={label} style={{
                background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px',
                padding: '1.5rem', textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--accent)', fontFamily: 'var(--mono)' }}>
                  {value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.25rem' }}>{label}</div>
              </div>
            ))}

          {/* Resume download */}
          <div style={{ gridColumn: 'span 2' }}>
            <a
              href="https://drive.google.com/uc?export=download&id=1X7iraGV2-Vqf_p4LOBv7QUgdwHEGkgUC"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '0.85rem',
                border: '1.5px dashed var(--border)',
                borderRadius: '10px',
                color: 'var(--muted)',
                fontSize: '0.875rem',
                transition: 'all 0.2s',
                fontFamily: 'var(--mono)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--muted)'
              }}
            >
              📄 Download Resume
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
