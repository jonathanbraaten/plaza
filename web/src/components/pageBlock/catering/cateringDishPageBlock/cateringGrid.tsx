import styles from './styles.module.css';
import clsx from 'clsx';
export default function CateringGrid({ children }: { children: React.ReactNode }) {
  return <article className={clsx(styles.grid)}>{children}</article>;
}
