import clsx from 'clsx';
import styles from './styles.module.css';
export default function Grid({ children }: { children: React.ReactNode }) {
  return <div className={clsx(styles.grid)}>{children}</div>;
}
