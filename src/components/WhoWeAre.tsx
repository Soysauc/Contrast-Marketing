import Button from './Button';
import Image from 'next/image';
import styles from '../styles/WhoWeAre.module.scss';

export default function WhoWeAre() {
  return (
    <div className={styles.whoweare}>
      <div className={styles.whoweare__column}>
        <div className={styles.whoweare__content}>
          <h1 className={styles.whoweare__title}>
            Simplify Your Promotional Products Experience
          </h1>
          <p className={styles.whoweare__subtitle}>
            Let us curate the perfect bundle tailored to your industry and needs
          </p>
          <Button type='startQuote' />
        </div>
        <div className={styles.whoweare__container}>
          <div className={styles.whoweare__image}>
            <Image src='/whoweare.svg' alt='Models' height={766} width={966} />
          </div>
        </div>
      </div>
    </div>
  );
}
