import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import { Lock } from 'lucide-react'

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const { data } = await axios.post('/api/admin/login', form)
      login(data.token)
      navigate('/admin/dashboard')
    } catch {
      setError('Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    background: 'var(--bg2)', border: '1.5px solid var(--border)',
    borderRadius: '8px', color: 'var(--text)', fontSize: '0.9rem',
    fontFamily: 'var(--sans)', outline: 'none'
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '2rem',
      background: 'radial-gradient(ellipse at center, rgba(79,142,247,0.06) 0%, transparent 70%)'
    }}>
      <div style={{
        width: '100%', maxWidth: '380px',
        background: 'var(--bg2)', border: '1px solid var(--border)',
        borderRadius: '16px', padding: '2.5rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '48px', height: '48px', background: 'rgba(79,142,247,0.1)',
            border: '1px solid rgba(79,142,247,0.3)', borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1rem', color: 'var(--accent)'
          }}>
            <Lock size={22} />
          </div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.3rem' }}>Admin Login</h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Access your messages dashboard</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>Email</label>
            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
              required placeholder="admin@email.com" style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>Password</label>
            <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}
              required placeholder="••••••••" style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          </div>
          {error && <p style={{ color: '#f87171', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading}
            style={{
              padding: '0.8rem', background: 'var(--accent)', color: '#fff',
              border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem',
              cursor: loading ? 'wait' : 'pointer', fontFamily: 'var(--sans)',
              marginTop: '0.5rem', opacity: loading ? 0.7 : 1
            }}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.82rem' }}>
          <a href="/" style={{ color: 'var(--muted)' }}>← Back to portfolio</a>
        </p>
      </div>
    </div>
  )
}
