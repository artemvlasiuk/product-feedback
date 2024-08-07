'use client';

import { useState } from 'react';
import styles from './Tabs.module.scss';

const tabs = ['Planned', 'In-Progress', 'Live'];

export function Tabs() {
  const [activeTab, setActiveTab] = useState('In-Progress');
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
