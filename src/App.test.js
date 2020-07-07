import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders label', () => {
  const { getByTestId } = render(<App />);
  const label = getByTestId('input-lbl');
  expect(label).toBeInTheDocument();
});

test('renders textbox', () => {
  const { getByTestId } = render(<App />);
  const textbox = getByTestId('no-count-tb');
  expect(textbox).toBeInTheDocument();
});

test('renders go button', () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId('submit-btn');
  expect(button).toBeInTheDocument();
});
