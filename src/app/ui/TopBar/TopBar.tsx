import Image from 'next/image';
import styles from './TopBar.module.scss';
import { SortSelector } from '../SortSelector';
import { Button } from '../Button';

export function TopBar() {
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
          <div className={styles.quantity}>6 Suggestions</div>
        </div>
        <SortSelector />
      </div>
      <Button color='primary'>+ Add Feedback</Button>
    </div>
  );
}
