import Button from './Button';
import Image from 'next/image';
import styles from '../styles/Hero.module.scss';
import Header from './Header';

export default function Hero() {
  return (
    <div id='home' className={styles.hero}>
      <Header />
      <div className={styles.hero__column}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            Simplify Your Promotional Products Experience
          </h1>
          <p className={styles.hero__subtitle}>
            Let us curate the perfect bundle tailored to your industry and needs
          </p>
          <Button type='startQuote' />
        </div>
        <div className={styles.hero__container}>
          <div className={styles.hero__image}>
            <Image src='/Hero.svg' alt='Models' height={766} width={966} />
          </div>
        </div>
      </div>
    </div>
  );
}
