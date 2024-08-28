import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'danger' | 'edit' | 'back';
  onClick?: () => void;
}

export function Button({ children, color = 'primary', onClick }: ButtonProps) {
  return (
    <button
      type='button'
      className={`${styles.button} ${styles[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
