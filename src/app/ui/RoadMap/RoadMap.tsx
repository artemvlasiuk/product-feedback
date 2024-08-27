import { getLocalData } from '@/app/data/api';
import styles from './RoadMap.module.scss';
import { ProductRequest } from '@/types';
import Link from 'next/link';

export async function RoadMap() {
  const { productRequests }: { productRequests: ProductRequest[] } =
    await getLocalData();

  const plannedRequests = productRequests.filter(
    (request) => request.status === 'planned'
  ).length;

  const inProgressRequests = productRequests.filter(
    (request) => request.status === 'in-progress'
  ).length;

  const liveRequests = productRequests.filter(
    (request) => request.status === 'suggestion'
  ).length;

  const roadMapList = [
    {
      name: 'Planned',
      background: '#F49F85',
      quantity: plannedRequests,
    },
    {
      name: 'In-Progress',
      background: '#AD1FEA',
      quantity: inProgressRequests,
    },
    {
      name: 'Live',
      background: '#62BCFA',
      quantity: liveRequests,
    },
  ];

  return (
    <div className={styles.roadmap}>
      <div className={styles.title}>
        Roadmap
        <Link href='/roadmap' className={styles.button}>
          View
        </Link>
      </div>
      <ul className={styles.list}>
        {roadMapList.map(({ name, background, quantity }) => (
          <li key={background} className={styles.item}>
            <div className={styles.name}>
              <div
                className={styles.dot}
                style={{ backgroundColor: background }}
              ></div>
              {name}
            </div>
            <p className={styles.quantity}>{quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
