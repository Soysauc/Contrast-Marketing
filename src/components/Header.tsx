import Button from './Button';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <div className={styles.hamburger}>
          <Image src='/Menu.svg' alt='hamburger' height={60} width={60} />
        </div>
        <Image src='/Logo.svg' alt='Logo' height={150} width={150} />
      </div>
      <Button type='startQuote' />
    </header>
  );
}
