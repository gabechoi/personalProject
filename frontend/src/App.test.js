import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Home heading', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
});
