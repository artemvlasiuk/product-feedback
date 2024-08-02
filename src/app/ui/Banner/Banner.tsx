import styles from './Banner.module.scss';

export function Banner() {
  return (
    <div className={styles.banner}>
      <h2 className={styles.title}>Frontend Mentor</h2>
      <h3 className={styles.subtitle}>Feedback Board</h3>
    </div>
  );
}
