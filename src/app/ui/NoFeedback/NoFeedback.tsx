import Image from 'next/image';
import styles from './NoFeedback.module.scss';
import { Button } from '../Button';

export function NoFeedback() {
  return (
    <div className={styles.nofeedback}>
      <Image
        alt='There is no feedback'
        src='/assets/suggestions/illustration-empty.svg'
        width={130}
        height={137}
      />
      <h4 className={styles.title}>There is no feedback yet.</h4>
      <p className={styles.description}>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Button color='primary'>+ Add Feedback</Button>
    </div>
  );
}
