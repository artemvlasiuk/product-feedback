import { CommentCard } from '../CommentCard';
import { NewCommentForm } from '../NewCommentForm';
import styles from './CommentsList.module.scss';

export function CommentsList() {
  return (
    <>
      <div className={styles.commentlist}>
        <div className={styles.quantity}>4 Comments</div>
        <CommentCard />
      </div>
      <NewCommentForm />
    </>
  );
}
