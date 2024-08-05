import { Header } from '../Header';
import { NoFeedback } from '../NoFeedback';
import { FeedbacksList } from '../FeedbacksList';
import { TopBar } from '../TopBar';
import styles from './Feedbacks.module.scss';

export function Feedbacks() {
  return (
    <main className={styles.feedbacks}>
      <Header />
      <TopBar />
      <FeedbacksList />
      
    </main>
  );
}
