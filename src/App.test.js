import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the page', () => {
  render(<App />);
  const textElement = screen.getByText(/Cano/i);
  expect(textElement).toBeInTheDocument();
});

/*further tests would include click events firing, components rendering properly,
sort functions working properly, search working properly
*/
