import styles from './Tabs.module.scss';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Tabs({ tabs, activeTab, setActiveTab }: TabsProps) {
  return (
    <aside className={styles.tabs}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`${styles.tab} ${
            tab === activeTab ? styles['tab--active'] : ''
          }`}
          onClick={() => setActiveTab(tab)}
        >{`${tab} (2)`}</div>
      ))}
    </aside>
  );
}
