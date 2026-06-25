import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import axios from 'axios'

const API = import.meta.env.VITE_API_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await axios.post(`${API}/api/contact`, form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('Contact error:', err)
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    background: 'var(--bg)', border: '1.5px solid var(--border)',
    borderRadius: '8px', color: 'var(--text)', fontSize: '0.9rem',
    fontFamily: 'var(--sans)', outline: 'none', transition: 'border-color 0.2s'
  }

  return (
    <section id="contact" style={{
      padding: '5rem clamp(1.5rem,5vw,4rem)',
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
          06. contact
        </p>
        <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
          Get In Touch
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '3rem', maxWidth: '480px', lineHeight: 1.75 }}>
          I'm open to internships, full-time opportunities, and interesting collaborations. Drop me a message!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '3rem' }}>
          {/* Contact info */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2rem' }}>
              {[
                { icon: <Mail size={16} />, label: 'Email', value: 'mohammadmosharib03@gmail.com', href: 'mailto:mohammadmosharib03@gmail.com' },
                { icon: <Phone size={16} />, label: 'Phone', value: '+91 7781095139', href: 'tel:+917781095139' },
                { icon: <MapPin size={16} />, label: 'Location', value: 'Bihar, India', href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '38px', height: '38px', background: 'rgba(79,142,247,0.1)',
                    border: '1px solid rgba(79,142,247,0.2)', borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)', flexShrink: 0
                  }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.1rem' }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ fontSize: '0.9rem', color: 'var(--text)', fontWeight: 500 }}>{value}</a>
                    ) : (
                      <span style={{ fontSize: '0.9rem', color: 'var(--text)', fontWeight: 500 }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <Github size={18} />, href: 'https://github.com/mosharib-dev', label: 'GitHub' },
                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/mohammad-mosharib/', label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener"
                  title={label}
                  style={{
                    width: '42px', height: '42px', background: 'var(--bg)',
                    border: '1px solid var(--border)', borderRadius: '9px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--muted)', transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>Name *</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>Email *</label>
                <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="you@example.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>
            </div>
            <div>
              <label style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>Subject *</label>
              <input name="subject" value={form.subject} onChange={handleChange} required placeholder="What's this about?"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            </div>
            <div>
              <label style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>Message *</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="Tell me about the opportunity..."
                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            </div>

            {status === 'success' && (
              <div style={{
                padding: '0.75rem 1rem',
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: '8px'
              }}>
                ✓ Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div style={{
                padding: '0.75rem 1rem',
                background: 'rgba(248,113,113,0.1)',
                border: '1px solid rgba(248,113,113,0.3)',
                borderRadius: '8px'
              }}>
                ✗ Something went wrong. Make sure the backend server is running and try again.
              </div>
            )}

            <button type="submit" disabled={status === 'loading'}
                style={{
                padding: '0.8rem 1.75rem', background: status === 'loading' ? 'var(--border)' : 'var(--accent)',
                color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem',
                cursor: status === 'loading' ? 'wait' : 'pointer',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                transition: 'all 0.2s', fontFamily: 'var(--sans)', width: 'fit-content'
                }}>
                <Send size={15} />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
