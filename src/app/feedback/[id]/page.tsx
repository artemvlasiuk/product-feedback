import styles from './page.module.scss';
import { Container } from '../../ui/Container';
import { Button } from '../../ui/Button';
import { FeedbackCard } from '../../ui/FeedbackCard';
import Image from 'next/image';
import { CommentsList } from '../../ui/CommentsList';
import type { Metadata } from 'next';
import { getLocalData } from '@/app/data/api';
import { ProductRequest } from '@/types';

export const metadata: Metadata = {
  title: 'Feedback Details',
};

export default async function Feedback({ params }: { params: { id: string } }) {
  const { productRequests } = await getLocalData();
  const id = params.id;
  const requestToShow = productRequests.find(
    (request: ProductRequest) => request.id.toString() === id
  );

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
        <FeedbackCard request={requestToShow} />
        <CommentsList />
      </div>
    </Container>
  );
}
