import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = ({ onLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    remember: true,
  });

  const from = location.state?.from?.pathname || '/';

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({
      name: formState.name,
      email: formState.email,
      remember: formState.remember,
    });
    navigate(from, { replace: true });
  };

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="status-pill auth-pill" aria-label="sign in">
          <span className="dot" />
          Log into your workspace
        </div>
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">
          Sign in to access your personalized job tracker and keep your applications organized.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Cooper"
            value={formState.name}
            onChange={handleChange}
            autoComplete="name"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            value={formState.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
          <label className="remember-toggle">
            <input
              type="checkbox"
              name="remember"
              checked={formState.remember}
              onChange={handleChange}
            />
            Keep me signed in
          </label>
          <button type="submit" className="cta-primary submit-button">
            Continue <span aria-hidden>→</span>
          </button>
        </form>

        <p className="auth-footer">
          New here?{' '}
          <Link to="/" className="auth-link">
            Explore the homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

