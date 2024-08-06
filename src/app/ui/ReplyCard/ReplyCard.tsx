import Image from 'next/image';
import styles from './ReplyCard.module.scss';

export function ReplyCard() {
  return (
    <article className={styles.reply}>
      <div className={styles.author}>
        <div className={styles.imageWrapper}>
          <Image
            alt='Author photo'
            src='/assets/user-images/image-anne.jpg'
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
        <span className={styles.replyTo}>@hummingbird1</span>
        {` `}
        While waiting for dark mode, there are browser extensions that will also
        do the job. Search for dark theme followed by your browser. There might
        be a need to turn off the extension for sites with naturally black
        backgrounds though.
      </p>
    </article>
  );
}
