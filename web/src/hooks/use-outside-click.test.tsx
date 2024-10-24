import { render, screen } from '@testing-library/react';
import { useOutsideClick } from './use-outside-click';
import { useRef } from 'react';
import userEvent from '@testing-library/user-event';
const TestComponent = ({ isActive, onClick }: { isActive: boolean; onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, onClick);
  return (
    <div data-is-open={isActive} ref={ref}>
      Test element
    </div>
  );
};
describe('GIVEN useOutsideClick', () => {
  describe('WHEN is invoked', () => {
    it('THEN calls the callback when clicking outside the ref element', async () => {
      const user = userEvent.setup();
      let isActive = true;
      const callback = jest.fn(() => (isActive = false));
      render(
        <>
          <TestComponent isActive={isActive} onClick={callback} />
          <div data-testid="target">Outside element</div>
        </>,
      );

      await user.click(screen.getByTestId('target'));
      expect(callback).toHaveBeenCalledTimes(1);
      expect(isActive).toBeFalsy();
    });
  });
});
