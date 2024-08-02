import styles from './RoadMap.module.scss';

const roadMapList = [
  {
    name: 'Planned',
    background: '#F49F85',
  },
  {
    name: 'In-Progress',
    background: '#AD1FEA',
  },
  {
    name: 'Live',
    background: '#62BCFA',
  },
];

export function RoadMap() {
  return (
    <div className={styles.roadmap}>
      <div className={styles.title}>
        Roadmap
        <button className={styles.button}>View</button>
      </div>
      <ul className={styles.list}>
        {roadMapList.map(({ name, background }) => (
          <li key={background} className={styles.item}>
            <div className={styles.name}>
              <div
                className={styles.dot}
                style={{ backgroundColor: background }}
              ></div>
              {name}
            </div>
            <p className={styles.quantity}>2</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
