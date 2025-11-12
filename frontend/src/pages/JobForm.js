import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobForm.css';

const JobForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    title: '',
    company: '',
    type: 'Full-Time',
    salary: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      title: formState.title.trim(),
      company: formState.company.trim(),
      type: formState.type,
      salary: formState.salary.trim(),
    });
    navigate('/', { replace: true });
  };

  return (
    <div className="job-form-shell">
      <div className="container job-form-wrapper">
        <section className="job-form-hero">
          <div className="status-pill" aria-label="new job application">
            <span className="dot" />
            Log new application
          </div>
          <h1 className="hero-title small-title">Add a new role</h1>
          <p className="hero-subtitle">
            Keep track of every opportunity and never lose sight of your next move. Fill in the
            details below to save this application.
          </p>
        </section>

        <form className="job-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Job title</label>
            <input
              id="title"
              name="title"
              value={formState.title}
              onChange={handleChange}
              placeholder="Senior Product Manager"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              value={formState.company}
              onChange={handleChange}
              placeholder="Acme Corp"
              required
            />
          </div>
          <div className="form-group">
            <span className="group-label">Position type</span>
            <div className="segment-control" role="radiogroup" aria-label="position type">
              {['Full-Time', 'Part-Time', 'Contract'].map((type) => (
                <label key={type} className={`segment-option ${formState.type === type ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={formState.type === type}
                    onChange={handleChange}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary (optional)</label>
            <input
              id="salary"
              name="salary"
              value={formState.salary}
              onChange={handleChange}
              placeholder="$110,000"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cta-secondary" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button type="submit" className="cta-primary">
              Save application <span aria-hidden>→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;

