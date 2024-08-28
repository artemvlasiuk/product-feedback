import Image from 'next/image';
import styles from './CommentCard.module.scss';
import { RepliesList } from '../RepliesList';
import { Comment } from '@/types';

interface CommentProps {
  comment: Comment;
}

export function CommentCard({ comment }: CommentProps) {
  const imageUrl = comment.user.image.replace(/^\./, '');

  const replies = comment?.replies;

  return (
    <article className={styles.comment}>
      <div className={styles.author}>
        <div className={styles.imageWrapper}>
          <Image alt='Avatar' src={imageUrl} width={40} height={40} />
        </div>
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>{comment.user.name}</p>
          <p className={styles.authorEmail}>{comment.user.username}</p>
        </div>
        <button className={styles.replyBtn}>Reply</button>
      </div>
      <p className={styles.content}>{comment.content}</p>

      {replies && <RepliesList replies={replies} />}
    </article>
  );
}
