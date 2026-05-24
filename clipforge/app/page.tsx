export default function Home() {
  return (
    <main style={{
      backgroundColor: '#08090d',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      color: '#f0ede8',
      padding: '0',
      margin: '0'
    }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 3rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)'
      }}>
        <div style={{ fontWeight: 800, fontSize: '1.3rem' }}>
          Clip<span style={{ color: '#ff4d1c' }}>Forge</span>.AI
        </div>
        <button style={{
          background: '#ff4d1c',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1.2rem',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 500
        }}>
          Start Free
        </button>
      </nav>

      {/* Hero */}
      <section style={{
        textAlign: 'center',
        padding: '6rem 2rem 4rem'
      }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(255,77,28,0.12)',
          border: '1px solid rgba(255,77,28,0.3)',
          color: '#ff8c42',
          fontSize: '0.75rem',
          padding: '0.35rem 0.85rem',
          borderRadius: '999px',
          marginBottom: '1.5rem'
        }}>
          🔥 Now with AI Viral Score™
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem,6vw,5rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          marginBottom: '1.5rem',
          letterSpacing: '-2px'
        }}>
          Turn Long Videos Into<br />
          <span style={{ color: '#ff4d1c' }}>Viral Clips</span> — Automatically.
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: '#6b7280',
          maxWidth: '520px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.7
        }}>
          Paste a YouTube link. ClipForge AI detects the best moments,
          edits them, and publishes to TikTok, Reels, and Shorts —
          <strong style={{ color: '#f0ede8' }}> zero effort on your end.</strong>
        </p>

        <button style={{
          background: '#ff4d1c',
          color: '#fff',
          border: 'none',
          padding: '1rem 2.5rem',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 500,
          cursor: 'pointer',
          marginRight: '1rem'
        }}>
          🚀 Start for Free
        </button>
        <button style={{
          background: 'transparent',
          color: '#f0ede8',
          border: '1px solid rgba(255,255,255,0.15)',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          Watch Demo
        </button>
      </section>

      {/* Stats */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '1.5rem',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '2rem'
      }}>
        {[
          { num: '12K+', label: 'Active Creators' },
          { num: '2.4M', label: 'Clips Generated' },
          { num: '8x', label: 'Avg. Reach Boost' },
          { num: '30s', label: 'Setup Time' },
        ].map((s) => (
          <div key={s.label}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{s.num}</div>
            <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{s.label}</div>
          </div>
        ))}
      </section>
    </main>
  );
}