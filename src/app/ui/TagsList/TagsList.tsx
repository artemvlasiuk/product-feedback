import styles from './TagsList.module.scss';

export function TagsList() {
  return (
    <ul className={styles.tags}>
      <li className={styles.tag}>All</li>
      <li className={styles.tag}>UI</li>
      <li className={styles.tag}>UX</li>
      <li className={styles.tag}>Enhancement</li>
      <li className={styles.tag}>Bug</li>
      <li className={styles.tag}>Feature</li>
    </ul>
  );
}
