import { Comment } from '@/types';
import { CommentCard } from '../CommentCard';
import { NewCommentForm } from '../NewCommentForm';
import styles from './CommentsList.module.scss';

interface CommentsListProps {
  comments: Comment[];
}

export function CommentsList({ comments }: CommentsListProps) {
  return (
    <>
      <div className={styles.commentlist}>
        <div className={styles.quantity}>{`${comments.length} Comments`}</div>
        {comments.map((comment) => (
          <CommentCard comment={comment} key={comment.id} />
        ))}
      </div>
      <NewCommentForm />
    </>
  );
}
