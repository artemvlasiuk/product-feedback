import Image from 'next/image';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import styles from './page.module.scss';
import { Tabs } from '../ui/Tabs';

export default function Roadmap() {
  return (
    <Container>
      <div className={styles.header}>
        <div className={styles.headerColumn}>
          <Button color='back'>
            <Image
              alt='Back Button Icon'
              src='/assets/shared/icon-arrow-left.svg'
              width={4}
              height={8}
            />
            Go Back
          </Button>
          <h4 className={styles.title}>Roadmap</h4>
        </div>
        <Button color='primary'>+ Add Feedback</Button>
      </div>
      <Tabs />
    </Container>
  );
}
