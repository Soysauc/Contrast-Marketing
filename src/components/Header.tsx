import Button from './Button';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src='/Logo.svg'
        alt='Logo'
        height={160}
        width={160}
        className={styles.logo}
      />

      <nav className={styles.header__nav}>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#who-we-are'>About</a>
          </li>
          <li>
            <a href='#how-it-works'>Services</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>

      <Button type='startQuote' />
    </header>
  );
}
