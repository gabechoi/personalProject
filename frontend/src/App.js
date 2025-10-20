import './App.css';
import React, { Suspense, lazy } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
const AddUser = lazy(() => import('./pages/AddUser'));

function App() {
  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: '1rem' }}>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/add-user">Add User</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
