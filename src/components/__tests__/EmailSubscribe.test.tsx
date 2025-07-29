import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EmailSubscribe from '../EmailSubscribe';

// Mock fetch
global.fetch = jest.fn();

describe('EmailSubscribe', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  test('renders email subscription form', () => {
    render(<EmailSubscribe />);
    
    expect(screen.getByText('Stay Up to Date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  test('shows success notification on successful subscription', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
    });

    render(<EmailSubscribe />);
    
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByText('Subscribe');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('✓ Subscribed!')).toBeInTheDocument();
    });
  });

  test('shows error notification on failed subscription', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    render(<EmailSubscribe />);
    
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByText('Subscribe');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('⚠ Error occurred')).toBeInTheDocument();
    });
  });
});