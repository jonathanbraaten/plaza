import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import Header from '.';

describe('GIVEN <Header/> component', () => {
  describe('WHEN it is rendered', () => {
    it('THEN it should render the navigation and hamburger button', () => {
      render(<Header />);
      const nav = screen.getByRole('navigation');
      const hamburgerButton = screen.getByTestId('hamburger-button');
      expect(nav).toBeInTheDocument();
      expect(hamburgerButton).toBeInTheDocument();
    });

    it('THEN it should allow opening and closing the navigation', async () => {
      const user = userEvent.setup();
      const TestComponent = () => {
        const [isActive, setIsActive] = useState(false);
        const openNavigation = () => setIsActive(true);
        const closeNavigation = () => setIsActive(false);

        return (
          <div>
            <button onClick={openNavigation} data-testid="open-nav-handler">
              Open Navigation
            </button>
            <button onClick={closeNavigation} data-testid="close-nav-handler">
              Close navigation
            </button>
            <div>{isActive ? 'Navigation is open' : 'Navigation is closed'}</div>
          </div>
        );
      };
      render(<TestComponent />);
      const openButton = screen.getByTestId('open-nav-handler');
      const closeButton = screen.getByTestId('close-nav-handler');

      expect(openButton).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();

      await user.click(openButton);
      expect(screen.getByText(/Navigation is open/)).toBeInTheDocument();

      await user.click(closeButton);
      expect(screen.getByText(/Navigation is closed/)).toBeInTheDocument();
    });
  });
});
