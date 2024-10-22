import styles from './styles.module.css';
import clsx from 'clsx';
export default function Grid({ children }: { children: React.ReactNode }) {
  return <ul className={clsx(styles.grid)}>{children}</ul>;
}
