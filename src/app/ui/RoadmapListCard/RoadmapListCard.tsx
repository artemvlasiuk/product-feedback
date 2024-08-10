import Image from 'next/image';
import styles from './RoadmapListCard.module.scss';
import { Tag } from '../Tag';

export function RoadmapListCard() {
  return (
    <article className={styles.item}>
      <p className={styles.status}>
        <span className={styles.circle}></span>
        In Progress
      </p>
      <p className={styles.itemName}>One-click portfolio generation</p>
      <p className={styles.itemDescription}>
        Add ability to create professional looking portfolio from profile.
      </p>
      <Tag>Feature</Tag>
      <div className={styles.actions}>
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
      </div>
    </article>
  );
}
