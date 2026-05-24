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
    {/* Pricing */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <p style={{ color: '#ff4d1c', fontSize: '0.75rem', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Pricing</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px' }}>Start Free. Scale Fast.</h2>
        <p style={{ color: '#6b7280', marginBottom: '3rem' }}>No contracts. Cancel anytime.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Starter */}
          <div style={{ background: '#0f1117', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '2rem', textAlign: 'left' }}>
            <div style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.25rem' }}>Starter</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.75rem 0 0.25rem' }}>$0<span style={{ fontSize: '1rem', fontWeight: 400, color: '#6b7280' }}>/mo</span></div>
            <div style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '1.5rem' }}>Good for testing</div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
              {['5 clips/month', '720p export', 'Manual publish', 'Basic viral score'].map(f => (
                <li key={f} style={{ color: '#6b7280', fontSize: '0.82rem', marginBottom: '0.6rem' }}>✓ {f}</li>
              ))}
            </ul>
            <button style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#f0ede8', cursor: 'pointer' }}>Get Started Free</button>
          </div>

          {/* Creator */}
          <div style={{ background: '#0f1117', border: '2px solid #ff4d1c', borderRadius: '14px', padding: '2rem', textAlign: 'left' }}>
            <div style={{ background: 'rgba(255,77,28,0.12)', color: '#ff4d1c', fontSize: '0.7rem', fontWeight: 600, padding: '3px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: '0.75rem' }}>Most Popular</div>
            <div style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.25rem' }}>Creator</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.75rem 0 0.25rem' }}>$49<span style={{ fontSize: '1rem', fontWeight: 400, color: '#6b7280' }}>/mo</span></div>
            <div style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '1.5rem' }}>For serious creators</div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
              {['100 clips/month', '1080p + 4K export', 'Auto-publish all platforms', 'AI viral score + captions', 'Priority processing'].map(f => (
                <li key={f} style={{ color: '#6b7280', fontSize: '0.82rem', marginBottom: '0.6rem' }}>✓ {f}</li>
              ))}
            </ul>
            <button style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: 'none', background: '#ff4d1c', color: '#fff', cursor: 'pointer', fontWeight: 500 }}>Start 7-Day Free Trial</button>
          </div>

          {/* Agency */}
          <div style={{ background: '#0f1117', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '2rem', textAlign: 'left' }}>
            <div style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.25rem' }}>Agency</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.75rem 0 0.25rem' }}>$199<span style={{ fontSize: '1rem', fontWeight: 400, color: '#6b7280' }}>/mo</span></div>
            <div style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '1.5rem' }}>For teams & brands</div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
              {['Unlimited clips', '10 channels', 'White-label exports', 'API access', 'Dedicated support'].map(f => (
                <li key={f} style={{ color: '#6b7280', fontSize: '0.82rem', marginBottom: '0.6rem' }}>✓ {f}</li>
              ))}
            </ul>
            <button style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#f0ede8', cursor: 'pointer' }}>Contact Sales</button>
          </div>

        </div>
      </section>
    {/* How It Works */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <p style={{ color: '#ff4d1c', fontSize: '0.75rem', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>How It Works</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px' }}>Three Steps. Done.</h2>
        <p style={{ color: '#6b7280', marginBottom: '3rem' }}>No timeline scrubbing. No export queues. Just paste and walk away.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
          {[
            { num: '01', icon: '🔗', title: 'Paste Your Link', desc: 'Drop any YouTube URL. We pull the video directly — no download needed on your machine.' },
            { num: '02', icon: '🧠', title: 'AI Detects Highlights', desc: 'Our model scores every second for hook potential, emotion, and viral likelihood.' },
            { num: '03', icon: '📤', title: 'Auto-Publish', desc: 'Clips are formatted for TikTok, Reels, and Shorts — published on your schedule.' },
          ].map((step) => (
            <div key={step.num} style={{ background: '#0f1117', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '2rem', textAlign: 'left' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'rgba(255,77,28,0.1)', lineHeight: 1, marginBottom: '0.5rem' }}>{step.num}</div>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{step.title}</div>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', background: '#0f1117' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px' }}>Join the Waitlist</h2>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Be the first to know when we launch. No spam.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{ padding: '0.85rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#f0ede8', fontSize: '1rem', width: '300px' }}
          />
          <button style={{ background: '#ff4d1c', color: '#fff', border: 'none', padding: '0.85rem 2rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 500, cursor: 'pointer' }}>
            Get Early Access 🚀
          </button>
        </div>
      </section>
    </main>
  );
}