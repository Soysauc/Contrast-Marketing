import Link from 'next/link';
import styles from '../styles/Button.module.css';

export default function Button() {
  return (
    <Link className={styles.button} href='/contact'>
      START A QUOTE
    </Link>
  );
}
