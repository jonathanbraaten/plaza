import styles from './styles.module.css';
import clsx from 'clsx';
export default function CateringGrid({ children }: { children: React.ReactNode }) {
  return <section className={clsx(styles.grid)}>{children}</section>;
}
