import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from '.';

describe('GIVEN <Nav/>', () => {
  describe('WHEN is rendered', () => {
    it('THEN focuses on the close button, allows the user to press Enter, and invokes the onClick callback to close the navigation', async () => {
      const user = userEvent.setup();
      let isActive = true;
      const onClick: () => void = jest.fn(() => (isActive = false));
      render(<Nav isActive={isActive} onClick={onClick} />);
      const closeButton = screen.getByTestId('nav-close');
      expect(closeButton).toBeInTheDocument();
      closeButton.focus();
      await user.keyboard('{Enter}');
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(isActive).toBeFalsy();
    });

    it('THEN waits for a click on the close button, and invokes the onClick callback to close the navigation', async () => {
      const user = userEvent.setup();
      let isActive = true;
      const onClick = jest.fn(() => (isActive = false));
      render(<Nav isActive={isActive} onClick={onClick} />);
      const closeButton = screen.getByTestId('nav-close');
      expect(closeButton).toBeInTheDocument();
      await user.click(closeButton);
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(isActive).toBeFalsy();
    });
  });
});
