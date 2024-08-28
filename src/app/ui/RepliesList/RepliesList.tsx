import { Reply } from '@/types';
import { ReplyCard } from '../ReplyCard';
import styles from './RepliesList.module.scss';

interface RepliesListProps {
  replies: Reply[];
}

export function RepliesList({ replies }: RepliesListProps) {
  return (
    <ul className={styles.repliesList}>
      {replies.map((reply) => (
        <ReplyCard reply={reply} key={reply.content} />
      ))}
    </ul>
  );
}
