import './App.css';
import './components/Header.css';
import React, { Suspense, lazy, useMemo, useState } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';

const SignIn = lazy(() => import('./pages/SignIn'));
const JobForm = lazy(() => import('./pages/JobForm'));

const initialJobs = [
  {
    id: 'prefill-1',
    title: 'Frontend Engineer',
    company: 'Nova Labs',
    type: 'Full-Time',
    salary: '$115,000',
    appliedOn: 'Oct 15, 2025',
  },
  {
    id: 'prefill-2',
    title: 'Product Designer',
    company: 'Velvet Robotics',
    type: 'Full-Time',
    salary: '$98,000',
    appliedOn: 'Oct 28, 2025',
  },
];

const RequireAuth = ({ user, children }) => {
  const location = useLocation();

  if (!user) {
    return <Navigate to="/sign-in" replace state={{ from: location }} />;
  }

  return children;
};

function App() {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState(initialJobs);

  const handleLogin = (credentials) => {
    const fallbackName = credentials.name?.trim() || 'Candidate';
    setUser({
      name: fallbackName,
      email: credentials.email,
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleAddJob = (job) => {
    setJobs((prev) => [
      ...prev,
      {
        ...job,
        id: `job-${Date.now()}`,
        appliedOn: job.appliedOn ?? new Date().toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      },
    ]);
  };

  const navLinks = useMemo(() => {
    if (user) {
      return (
        <>
          <Link to="/" className="header-link">
            Dashboard
          </Link>
          <Link to="/jobs/new" className="header-link">
            Add Job
          </Link>
        </>
      );
    }

    return (
      <>
        <Link to="/sign-in" className="header-link">
          Log in
        </Link>
        <Link to="/sign-in" className="header-cta">
          Get Started
        </Link>
      </>
    );
  }, [user]);

  return (
    <div className="app-frame">
      <header className="site-header">
        <div className="container header-content">
          <Link to="/" className="brand" aria-label="Home">
            Fusion
          </Link>

          <nav className="header-actions">
            {navLinks}
            {user && (
              <button type="button" className="header-logout" onClick={handleLogout}>
                Log out
              </button>
            )}
          </nav>
        </div>
      </header>

      <main>
        <Suspense fallback={<div className="loading-state">Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={<Home user={user} jobs={jobs} onLogout={handleLogout} />}
            />
            <Route
              path="/sign-in"
              element={
                user ? (
                  <Navigate to="/" replace />
                ) : (
                  <SignIn onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/jobs/new"
              element={
                <RequireAuth user={user}>
                  <JobForm onSubmit={handleAddJob} />
                </RequireAuth>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
