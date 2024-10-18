import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import Header from '.';

describe('Header', () => {
  it('Should render Header', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
