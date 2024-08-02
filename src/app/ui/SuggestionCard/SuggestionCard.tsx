import Image from 'next/image';
import { Tag } from '../Tag';
import styles from './SuggestionCard.module.scss';

export function SuggestionCard() {
  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <h4 className={styles.title}>Add tags for solutions</h4>
        <p className={styles.description}>
          Easier to search for solutions based on a specific stack.
        </p>
        <Tag>Enhancement</Tag>
      </div>
      <button type='button' className={styles.upvote}>
        <Image
          alt='Upvote Icon'
          src='/assets/shared/icon-upvote.svg'
          width={8}
          height={4}
        />
        112
      </button>
      <div className={styles.comments}>
        <Image
          alt='Comments Icon'
          src='/assets/shared/icon-comments.svg'
          width={18}
          height={16}
        />
        2
      </div>
    </article>
  );
}
