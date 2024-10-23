'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { navLinks } from './navLinks';
import { usePathname } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { useRef } from 'react';
type Props = {
  isActive: boolean;
  onClick: () => void;
};
export default function Nav({ isActive, onClick }: Props) {
  const ref = useRef(null);
  useOutsideClick(ref, onClick);
  const pathName = usePathname();

  return (
    <nav
      ref={ref}
      className={clsx(
        'md:bg-inherit bg-white  h-full w-[19rem] sm:w-[22rem] md:w-auto  py-4 flex flex-col md:flex-row gap-4   fixed  md:static right-0 top-0 md:translate-x-0 z-[10]',
        {
          'translate-x-0 transition-transform 150ms ease-in-out': isActive,
          'translate-x-full ': !isActive,
        },
      )}
    >
      <button onClick={onClick} className="md:hidden self-end px-2 lg:px-0">
        <IoMdClose size={30} />
      </button>
      <ul className="flex flex-col md:flex-row gap-6 h-full pt-10 pl-10 md:pt-0 md:pl-0 text-xl md:text-base">
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
