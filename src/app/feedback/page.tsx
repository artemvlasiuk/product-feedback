import styles from './page.module.scss';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { FeedbackCard } from '../ui/FeedbackCard';
import Image from 'next/image';
import { CommentsList } from '../ui/CommentsList';

export default function Feedback() {
  return (
    <Container>
      <div className={styles.feedback}>
        <div className={styles.buttons}>
          <Button color='back'>
            <Image
              alt='Back Button Icon'
              src='/assets/shared/icon-arrow-left.svg'
              width={4}
              height={8}
            />
            Go Back
          </Button>
          <Button color='edit'>Edit Feedback</Button>
        </div>
        <FeedbackCard />
        <CommentsList />
      </div>
    </Container>
  );
}
