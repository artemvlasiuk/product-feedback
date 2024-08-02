import styles from './Header.module.scss';
import Image from 'next/image';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href='/' className={styles.link}>
          Frontend Mentor
        </a>
        <p className={styles.text}>Feedback Board</p>
      </div>
      <button className='styles.menu-btn'>
        <Image
          src='/assets/shared/mobile/icon-hamburger.svg'
          width={20}
          height={17}
          alt='Menu button'
        />
      </button>
    </header>
  );
}
