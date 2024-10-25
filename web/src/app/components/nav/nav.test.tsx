import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from '.';

describe('GIVEN <Nav/> component', () => {
  describe('WHEN it is rendered', () => {
    it('THEN it should focus on the close button, allow the user to press Enter, and invoke the onClick callback to close the navigation', async () => {
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

    it('THEN it should invoke the onClick callback when the close button is clicked to close the navigation', async () => {
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
