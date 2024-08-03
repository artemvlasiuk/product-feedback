import Image from 'next/image';
import styles from './CommentCard.module.scss';

export function CommentCard() {
  return (
    <article className={styles.comment}>
      <div className={styles.author}>
        <div className={styles.imageWrapper}>
          <Image
            alt='Avatar'
            src='/assets/user-images/image-elijah.jpg'
            width={40}
            height={40}
          />
        </div>
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>Elijah Moss</p>
          <p className={styles.authorEmail}>@hexagon.bestagon</p>
        </div>
        <button className={styles.replyBtn}>Reply</button>
      </div>
      <p className={styles.content}>
        Also, please allow styles to be applied based on system preferences. I
        would love to be able to browse Frontend Mentor in the evening after my
        device’s dark mode turns on without the bright background it currently
        has.
      </p>
    </article>
  );
}
