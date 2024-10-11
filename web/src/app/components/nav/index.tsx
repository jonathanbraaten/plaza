'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { navLinks } from './navLinks';
import { usePathname } from 'next/navigation';

type Props = {
  isActive: boolean;
  onClick: () => void;
};
export default function Nav({ isActive, onClick }: Props) {
  const pathName = usePathname();
  return (
    <nav
      className={clsx(
        'bg-red-500 md:bg-inherit h-full md:h-auto md:max-w-full md:w-auto max-w-[15rem] w-full py-4 flex flex-col md:flex-row gap-4  fixed  md:static right-0 top-0 md:translate-x-0',
        {
          'translate-x-0 transition-transform 150ms ease-in-out': isActive,
          'translate-x-full ': !isActive,
        },
      )}
    >
      <button onClick={onClick} className="md:hidden">
        Close Menu
      </button>
      <ul className="flex flex-col md:flex-row gap-6">
        {navLinks.map(({ id, name, path }) => (
          <li
            className={clsx('hover:underline', {
              underline: pathName === path,
            })}
            key={id}
          >
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
