import Image from 'next/image';
import { Tag } from '../Tag';
import styles from './FeedbackCard.module.scss';
import { ProductRequest } from '@/types';

interface FeedbackCardProps {
  request: ProductRequest;
}

export function FeedbackCard({ request }: FeedbackCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <h4 className={styles.title}>{request.title}</h4>
        <p className={styles.description}>{request.description}</p>
        <Tag>{request.category}</Tag>
      </div>
      <button type='button' className={styles.upvote}>
        <Image
          alt='Upvote Icon'
          src='/assets/shared/icon-upvote.svg'
          width={8}
          height={4}
        />
        {request.upvotes}
      </button>
      {request.comments && (
        <div className={styles.comments}>
          <Image
            alt='Comments Icon'
            src='/assets/shared/icon-comments.svg'
            width={18}
            height={16}
          />
          {request.comments?.length}
        </div>
      )}
    </article>
  );
}
