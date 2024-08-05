import { FeedbackCard } from '../FeedbackCard';
import styles from './FeedbacksList.module.scss';

export function FeedbacksList() {
  return (
    <ul className={styles.list}>
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
    </ul>
  );
}
