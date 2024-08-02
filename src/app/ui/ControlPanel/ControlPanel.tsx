import { Banner } from '../Banner';
import { RoadMap } from '../RoadMap';
import { TagsList } from '../TagsList';
import styles from './ControlPanel.module.scss';

export function ControlPanel() {
  return (
    <aside className={styles.control}>
      <Banner />
      <TagsList />
      <RoadMap />
    </aside>
  );
}
