import { ReplyCard } from '../ReplyCard';
import styles from './RepliesList.module.scss';

export function RepliesList() {
  return (
    <ul className={styles.repliesList}>
      <ReplyCard />
      <ReplyCard />
    </ul>
  );
}
