import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const EmptyState = () => (
  <div className="empty-state" role="status">
    <div className="empty-icon" aria-hidden>
      ✨
    </div>
    <h3>No applications yet</h3>
    <p>
      Start tracking your job hunt by adding the first application. We&apos;ll keep everything
      neatly organized for you.
    </p>
    <Link to="/jobs/new" className="cta-primary">
      Add an application <span aria-hidden>→</span>
    </Link>
  </div>
);

const Home = ({ user, jobs }) => {
  const hasJobs = Boolean(jobs?.length);

  if (!user) {
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
            <Link to="/sign-in" className="cta-primary">
              Get Started <span aria-hidden>→</span>
            </Link>
            <Link to="/sign-in" className="cta-secondary">
              Already have an account?
            </Link>
          </div>

          <a className="social-link" href="#" rel="noreferrer">
            <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="12" fill="#0A66C2" />
              <path d="M7.2 9.1h2.2v7.6H7.2V9.1zm1.1-3.7c.7 0 1.2.5 1.2 1.2 0 .7-.5 1.2-1.2 1.2-.7 0-1.2-.5-1.2-1.2 0-.6.5-1.2 1.2-1.2zM11 9.1h2.1v1.1h.1c.3-.5 1.1-1.2 2.3-1.2 2.4 0 2.8 1.6 2.8 3.6v4H16v-3.5c0-.8 0-1.9-1.2-1.9-1.2 0-1.4.9-1.4 1.8v3.6H11V9.1z" fill="#fff" />
            </svg>
            <span>Follow us on LinkedIn</span>
          </a>
        </section>

        <section className="features container" aria-label="key features">
          <article className="feature-card">
            <div className="feature-icon" aria-hidden>
              ⚡
            </div>
            <h3 className="feature-title">Lightning Fast</h3>
            <p className="feature-desc">
              Built for performance with optimized rendering and smart caching.
            </p>
          </article>
          <article className="feature-card">
            <div className="feature-icon" aria-hidden>
              🔒
            </div>
            <h3 className="feature-title">Secure</h3>
            <p className="feature-desc">
              Enterprise-grade security to keep your data safe and compliant.
            </p>
          </article>
          <article className="feature-card">
            <div className="feature-icon" aria-hidden>
              🚀
            </div>
            <h3 className="feature-title">Scalable</h3>
            <p className="feature-desc">Scale from prototype to millions of users without rewrites.</p>
          </article>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="hero container">
        <div className="status-pill" aria-label="logged in user">
          <span className="dot" />
          Welcome back, {user.name}
        </div>
        <h1 className="hero-title">Your Job Applications</h1>
        <p className="hero-subtitle">
          Track every role you&apos;ve applied to, keep details organized, and stay ready for the
          next follow-up.
        </p>

        <div className="cta-group">
          <Link to="/jobs/new" className="cta-primary">
            Add application <span aria-hidden>→</span>
          </Link>
          <Link to="/jobs/new" className="cta-secondary">
            Log a quick update
          </Link>
        </div>
      </section>

      <section className="applications container" aria-label="applied jobs">
        {hasJobs ? (
          <div className="applications-grid">
            {jobs.map((job) => (
              <article key={job.id} className="application-card">
                <div className="card-header">
                  <h3 className="application-title">{job.title}</h3>
                  <span className={`badge ${job.type === 'Full-Time' ? 'badge-full' : 'badge-part'}`}>
                    {job.type}
                  </span>
                </div>
                <p className="application-company">{job.company}</p>
                <dl className="application-meta">
                  <div>
                    <dt>Salary</dt>
                    <dd>{job.salary || '—'}</dd>
                  </div>
                  <div>
                    <dt>Applied</dt>
                    <dd>{job.appliedOn}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </section>
    </main>
  );
};

export default Home;
