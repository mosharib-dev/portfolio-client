import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import { LogOut, Trash2, Mail, MailOpen, RefreshCw } from 'lucide-react'

export default function AdminDashboard() {
  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all') // all | unread | read

  const headers = { Authorization: `Bearer ${token}` }

  const fetchMessages = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('/api/admin/messages', { headers })
      setMessages(data)
    } catch {
      logout(); navigate('/admin/login')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchMessages() }, [])

  const markRead = async (id) => {
    await axios.patch(`/api/admin/messages/${id}/read`, {}, { headers })
    setMessages(msgs => msgs.map(m => m._id === id ? { ...m, read: true } : m))
    if (selected?._id === id) setSelected(s => ({ ...s, read: true }))
  }

  const deleteMsg = async (id) => {
    await axios.delete(`/api/admin/messages/${id}`, { headers })
    setMessages(msgs => msgs.filter(m => m._id !== id))
    if (selected?._id === id) setSelected(null)
  }

  const handleLogout = () => { logout(); navigate('/admin/login') }

  const filtered = messages.filter(m =>
    filter === 'all' ? true : filter === 'unread' ? !m.read : m.read
  )
  const unreadCount = messages.filter(m => !m.read).length

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      {/* Top bar */}
      <header style={{
        padding: '0 2rem', height: '60px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', borderBottom: '1px solid var(--border)',
        background: 'var(--bg2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', fontSize: '0.9rem' }}>&lt;Mosharib /&gt;</span>
          <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Admin Dashboard</span>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button onClick={fetchMessages}
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '7px',
              padding: '0.4rem 0.8rem', color: 'var(--muted)', cursor: 'pointer', display: 'flex',
              alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontFamily: 'var(--sans)' }}>
            <RefreshCw size={13} /> Refresh
          </button>
          <button onClick={handleLogout}
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '7px',
              padding: '0.4rem 0.8rem', color: 'var(--muted)', cursor: 'pointer', display: 'flex',
              alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontFamily: 'var(--sans)' }}>
            <LogOut size={13} /> Logout
          </button>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', flex: 1, minHeight: 0, height: 'calc(100vh - 60px)' }}>
        {/* Sidebar */}
        <aside style={{ borderRight: '1px solid var(--border)', overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
          {/* Filters */}
          <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['all', 'unread', 'read'].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{
                  padding: '0.3rem 0.8rem', borderRadius: '6px', cursor: 'pointer',
                  fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 500,
                  background: filter === f ? 'var(--accent)' : 'var(--bg2)',
                  color: filter === f ? '#fff' : 'var(--muted)',
                  border: `1px solid ${filter === f ? 'var(--accent)' : 'var(--border)'}`,
                }}>
                {f === 'all' ? `All (${messages.length})` : f === 'unread' ? `Unread (${unreadCount})` : `Read (${messages.length - unreadCount})`}
              </button>
            ))}
          </div>

          {/* Message list */}
          {loading ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--muted)' }}>Loading...</div>
          ) : filtered.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--muted)' }}>No messages</div>
          ) : (
            filtered.map(msg => (
              <div key={msg._id}
                onClick={() => { setSelected(msg); if (!msg.read) markRead(msg._id) }}
                style={{
                  padding: '1rem', cursor: 'pointer', borderBottom: '1px solid var(--border)',
                  background: selected?._id === msg._id ? 'rgba(79,142,247,0.08)' : msg.read ? 'transparent' : 'rgba(79,142,247,0.04)',
                  borderLeft: `3px solid ${selected?._id === msg._id ? 'var(--accent)' : 'transparent'}`,
                  transition: 'all 0.15s'
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                  <span style={{ fontWeight: msg.read ? 500 : 700, fontSize: '0.875rem', color: 'var(--text)' }}>
                    {msg.name}
                  </span>
                  {!msg.read && (
                    <span style={{ width: '7px', height: '7px', background: 'var(--accent)', borderRadius: '50%', flexShrink: 0, marginTop: '4px' }} />
                  )}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '0.2rem', fontWeight: 500 }}>{msg.subject}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
                  {new Date(msg.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
              </div>
            ))
          )}
        </aside>

        {/* Message detail */}
        <main style={{ padding: '2rem', overflow: 'auto' }}>
          {!selected ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              height: '100%', color: 'var(--muted)' }}>
              <Mail size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
              <p>Select a message to read</p>
            </div>
          ) : (
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.3rem' }}>{selected.subject}</h2>
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
                    From <strong style={{ color: 'var(--text)' }}>{selected.name}</strong> · {selected.email}
                  </p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                    {new Date(selected.createdAt).toLocaleString('en-IN')}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {!selected.read && (
                    <button onClick={() => markRead(selected._id)}
                      style={{ padding: '0.5rem 1rem', background: 'var(--bg2)', border: '1px solid var(--border)',
                        borderRadius: '7px', color: 'var(--muted)', cursor: 'pointer', display: 'flex',
                        alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontFamily: 'var(--sans)' }}>
                      <MailOpen size={13} /> Mark Read
                    </button>
                  )}
                  <button onClick={() => deleteMsg(selected._id)}
                    style={{ padding: '0.5rem 1rem', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)',
                      borderRadius: '7px', color: '#f87171', cursor: 'pointer', display: 'flex',
                      alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontFamily: 'var(--sans)' }}>
                    <Trash2 size={13} /> Delete
                  </button>
                </div>
              </div>

              <div style={{
                background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem',
                color: 'var(--text)', lineHeight: 1.8, fontSize: '0.95rem', whiteSpace: 'pre-wrap'
              }}>
                {selected.message}
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <a href={`mailto:${selected.email}?subject=Re: ${selected.subject}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.65rem 1.4rem', background: 'var(--accent)', color: '#fff',
                    borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem'
                  }}>
                  <Mail size={14} /> Reply via Email
                </a>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
