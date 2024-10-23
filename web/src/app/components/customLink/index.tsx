import clsx from 'clsx';
import Link from 'next/link';
import styles from './styles.module.css';
type Props = {
  variant: 'primary' | 'secondary' | 'primary_outline';
  href: string;
  children: React.ReactNode;
  position?: 'self-start' | 'self-center' | 'self-end';
};

export default function CustomLink({ variant, href, children, position }: Props) {
  switch (position) {
    case 'self-start':
      return (
        <Link className={clsx('self-start', styles[variant])} href={href}>
          {children}
        </Link>
      );
    case 'self-center':
      <Link className={clsx('self-center', styles[variant])} href={href}>
        {children}
      </Link>;
    case 'self-end':
      <Link className={clsx('self-end ', styles[variant])} href={href}>
        {children}
      </Link>;
    default:
      return (
        <Link className={clsx(styles[variant])} href={href}>
          {children}
        </Link>
      );
  }
}
