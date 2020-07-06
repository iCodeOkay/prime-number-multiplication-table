import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders label', () => {
  const { getByText } = render(<App />);
  const label = getByText(/Prime numbers count/i);
  expect(label).toBeInTheDocument();
});

test('renders textbox', () => {
  const { getByRole } = render(<App />);
  const textbox = getByRole('textbox', { id: /input-noCount/i });
  expect(textbox).toBeInTheDocument();
});

test('renders go button', () => {
  const { getByRole } = render(<App />);
  const button = getByRole('button', { id: /btn-submit/i });
  expect(button).toBeInTheDocument();
});
