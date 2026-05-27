'use client';
import { useState } from 'react'; 
import { SignInButton } from "@clerk/nextjs";
export default function Home() {
  const [url, setUrl] = useState('');
  const [videoInfo, setVideoInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const checkVideo = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/video-info`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      setVideoInfo(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };
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
        <SignInButton mode="modal">
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
        </SignInButton>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '6rem 2rem 4rem' }}>
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
        <SignInButton mode="modal">
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
        </SignInButton>
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

      {/* YouTube URL Input */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', background: 'linear-gradient(180deg, #0d0f13 0%, #0a0c10 100%)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <span style={{ background: 'rgba(255,77,28,0.1)', color: '#ff4d1c', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>✨ AI-Powered</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0 0.5rem' }}>Analyze Any YouTube Video</h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.05rem' }}>Paste a link and let AI do the rest</p>
          <div style={{ display: 'flex', gap: '0.75rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '0.5rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
            <input
              type="text"
              placeholder="https://www.youtube.com/watch?v=..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', background: 'transparent', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
            />
            <button onClick={checkVideo} style={{ background: '#ff4d1c', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, whiteSpace: 'nowrap' }}>
              {loading ? '⏳ Analyzing...' : '🚀 Analyze'}
            </button>
          </div>
          {videoInfo && (
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.5rem', textAlign: 'left' }}>
              <img src={videoInfo.thumbnail} style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }} />
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.1rem' }}>{videoInfo.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>⏱ {Math.floor(videoInfo.duration / 60)} min • 👤 {videoInfo.uploader}</p>
            </div>
          )}
        </div>
      </section>

      {/* Waitlist */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', background: 'linear-gradient(180deg, #0a0c10 0%, #0d0f13 100%)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <span style={{ background: 'rgba(255,77,28,0.1)', color: '#ff4d1c', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>🚀 Early Access</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0 0.5rem' }}>Be First to Launch</h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.05rem' }}>Join 12,000+ creators waiting for full access. No spam, ever.</p>
          <div style={{ display: 'flex', gap: '0.75rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '0.5rem', maxWidth: '460px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', background: 'transparent', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
            />
            <button style={{ background: '#ff4d1c', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, whiteSpace: 'nowrap' }}>
              Get Access 🚀
            </button>
          </div>
          <p style={{ color: '#4b5563', fontSize: '0.8rem', marginTop: '1rem' }}>✓ Free forever plan available &nbsp;·&nbsp; ✓ No credit card required</p>
        </div>
      </section>
    </main>
  );
}