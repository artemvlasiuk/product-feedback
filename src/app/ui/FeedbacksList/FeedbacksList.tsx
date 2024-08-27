import { getLocalData } from '@/app/data/api';
import { FeedbackCard } from '../FeedbackCard';
import styles from './FeedbacksList.module.scss';
import { ProductRequest } from '@/types';

export async function FeedbacksList() {
  const { productRequests } = await getLocalData();

  return (
    <ul className={styles.list}>
      {productRequests.map((request: ProductRequest) => (
        <FeedbackCard key={request.id} request={request} />
      ))}
    </ul>
  );
}
