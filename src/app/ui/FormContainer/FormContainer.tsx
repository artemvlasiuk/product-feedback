import styles from './FormContainer.module.scss';

export function FormContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
