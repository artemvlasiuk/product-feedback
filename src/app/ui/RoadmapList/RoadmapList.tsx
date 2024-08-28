import styles from './RoadmapList.module.scss';
import { RoadmapListCard } from '../RoadmapListCard';

interface RoadmapListProps {
  activeTab: string;
}

export function RoadmapList({ activeTab }: RoadmapListProps) {
  return (
    <main className={styles.list}>
      <ul
        className={`${styles.column} ${
          activeTab === 'Planned' ? styles.active : ''
        }`}
      >
        <h4 className={styles.title}>Planned (2)</h4>
        <p className={styles.description}>Ideas prioritized for research</p>
        <div className={styles.wrapper}>
          <RoadmapListCard />
          <RoadmapListCard />
        </div>
      </ul>
      <ul
        className={`${styles.column} ${
          activeTab === 'In-Progress' ? styles.active : ''
        }`}
      >
        <h4 className={styles.title}>In-Progress (3)</h4>
        <p className={styles.description}>Currently being developed</p>
        <div className={styles.wrapper}>
          <RoadmapListCard />
          <RoadmapListCard />
          <RoadmapListCard />
        </div>
      </ul>
      <ul
        className={`${styles.column} ${
          activeTab === 'Live' ? styles.active : ''
        }`}
      >
        <h4 className={styles.title}>Live (1)</h4>
        <p className={styles.description}>Released features</p>
        <div className={styles.wrapper}>
          <RoadmapListCard />
        </div>
      </ul>
    </main>
  );
}
