import Image from 'next/image';
import styles from './TopBar.module.scss';
import { SortSelector } from '../SortSelector';
import { Button } from '../Button';
import { getLocalData } from '@/app/data/api';
import Link from 'next/link';

export async function TopBar() {
  const { productRequests } = await getLocalData();
  return (
    <div className={styles.topbar}>
      <div className={styles.actions}>
        <div className={styles.suggestions}>
          <Image
            alt='Suggestions icon'
            width={23}
            height={24}
            src='/assets/suggestions/icon-suggestions.svg'
          />
          <div
            className={styles.quantity}
          >{`${productRequests.length} Suggestions`}</div>
        </div>
        <SortSelector />
      </div>
      <Link href='/new-feedback' className={styles.link}>
        <Button color='primary'>+ Add Feedback</Button>
      </Link>
    </div>
  );
}
