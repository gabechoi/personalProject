import './App.css';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
const AddUser = lazy(() => import('./pages/AddUser'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div style={{ padding: '2rem' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
