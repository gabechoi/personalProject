import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main>
      <section className="hero container">
        <div className="status-pill" aria-label="system status">
          <span className="dot" />
          Welcome to the future
        </div>
        <h1 className="hero-title">Build Something Amazing</h1>
        <p className="hero-subtitle">
          Create powerful applications with our modern platform. Get started in seconds and
          scale your ideas to millions of users.
        </p>

        <div className="cta-group">
          <Link to="/add-user" className="cta-primary">
            Get Started <span aria-hidden>→</span>
          </Link>
          <Link to="#" className="cta-secondary">Already have an account?</Link>
        </div>

        <a className="social-link" href="#" rel="noreferrer">
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="12" fill="#0A66C2" />
            <path d="M7.2 9.1h2.2v7.6H7.2V9.1zm1.1-3.7c.7 0 1.2.5 1.2 1.2 0 .7-.5 1.2-1.2 1.2-.7 0-1.2-.5-1.2-1.2 0-.6.5-1.2 1.2-1.2zM11 9.1h2.1v1.1h.1c.3-.5 1.1-1.2 2.3-1.2 2.4 0 2.8 1.6 2.8 3.6v4H16v-3.5c0-.8 0-1.9-1.2-1.9-1.2 0-1.4.9-1.4 1.8v3.6H11V9.1z" fill="#fff"/>
          </svg>
          <span>Follow us on LinkedIn</span>
        </a>
      </section>

      <section className="features container" aria-label="key features">
        <article className="feature-card">
          <div className="feature-icon" aria-hidden>⚡</div>
          <h3 className="feature-title">Lightning Fast</h3>
          <p className="feature-desc">Built for performance with optimized rendering and smart caching.</p>
        </article>
        <article className="feature-card">
          <div className="feature-icon" aria-hidden>🔒</div>
          <h3 className="feature-title">Secure</h3>
          <p className="feature-desc">Enterprise-grade security to keep your data safe and compliant.</p>
        </article>
        <article className="feature-card">
          <div className="feature-icon" aria-hidden>🚀</div>
          <h3 className="feature-title">Scalable</h3>
          <p className="feature-desc">Scale from prototype to millions of users without rewrites.</p>
        </article>
      </section>
    </main>
  );
};

export default Home;
