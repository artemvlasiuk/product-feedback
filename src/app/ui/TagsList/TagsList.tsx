import { Tag } from '../Tag/Tag';
import styles from './TagsList.module.scss';

export function TagsList() {
  return (
    <ul className={styles.tags}>
      <Tag>All</Tag>
      <Tag>UI</Tag>
      <Tag>UX</Tag>
      <Tag>Enhancement</Tag>
      <Tag>Bug</Tag>
      <Tag>Feature</Tag>
    </ul>
  );
}
