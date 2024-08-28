import Image from 'next/image';
import styles from './ReplyCard.module.scss';
import { Reply } from '@/types';

interface ReplyCardProps {
  reply: Reply;
}

export function ReplyCard({ reply }: ReplyCardProps) {
  const imageUrl = reply.user.image.replace(/^\./, '');

  return (
    <article className={styles.reply}>
      <div className={styles.author}>
        <div className={styles.imageWrapper}>
          <Image alt='Author photo' src={imageUrl} width={40} height={40} />
        </div>
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>{reply.user.name}</p>
          <p className={styles.authorEmail}>{reply.user.username}</p>
        </div>
        <button className={styles.replyBtn}>Reply</button>
      </div>
      <p className={styles.content}>
        <span className={styles.replyTo}>{reply.replyingTo}</span>
        {` `}
        While waiting for dark mode, there are browser extensions that will also
        do the job. Search for dark theme followed by your browser. There might
        be a need to turn off the extension for sites with naturally black
        backgrounds though.
      </p>
    </article>
  );
}
