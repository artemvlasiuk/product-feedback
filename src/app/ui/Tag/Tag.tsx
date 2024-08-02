import styles from './Tag.module.scss';

export function Tag({ children }: { children: React.ReactNode }) {
  return <li className={styles.tag}>{children}</li>;
}
