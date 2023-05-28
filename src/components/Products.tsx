import Button from './Button';
import Image from 'next/image';
import styles from '../styles/Products.module.scss';

export default function Products() {
  return (
    <div className={styles.products}>
      <div className={styles.products__column}>
        <div className={styles.products__content}>
          <h2 className={styles.products__title}>Our Products </h2>

          <Button type='startQuote' />
        </div>
        <div className={styles.products__container}>
          <div className={styles.products__image}>
            <Image src='/Products.svg' alt='Models' height={766} width={966} />
          </div>
        </div>
      </div>
    </div>
  );
}
