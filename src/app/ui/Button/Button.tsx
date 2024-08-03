import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'danger' | 'edit' | 'back';
}

export function Button({ children, color = 'primary' }: ButtonProps) {
  return (
    <button type='button' className={`${styles.button} ${styles[color]}`}>
      {children}
    </button>
  );
}
