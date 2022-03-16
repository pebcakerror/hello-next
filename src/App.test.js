import { render, screen } from '@testing-library/react';
import App from './App';

test("renders 'Rock & Roll' heading", () => {
  render(<App />);
  const heading = screen.getByText(/Rock & Roll/i);
  expect(heading).toBeInTheDocument();
});
