import Button from './Button';
import Image from 'next/image';
import styles from '../styles/Products.module.scss';

export default function Products() {
  return (
    <div id='products' className={styles.products}>
      <h2 className={styles.products__title}>Our Products</h2>
      <div className={styles.products__container}>
        <div className={styles.products__column}>
          <Image
            src={'/hoodie.png'}
            width={321}
            height={380}
            alt='hoodie icon'
            className={styles.product__image}
          />
          <div>
            <div>
              <Image
                src={'/Hangers.svg'}
                width={28}
                height={27}
                alt='clothes icon'
                className={styles.product__token}
              />
              <span>Apparel</span>
            </div>

            <ul className={styles.product__list}>
              <li>T-shirts</li>
              <li>Tank Tops</li>
              <li>Long Sleeves</li>
              <li>Hoodies</li>
              <li>Tote Bags</li>
            </ul>
          </div>
        </div>
        <div className={styles.products__column}>
          <div>
            <div>
              <Image
                src={'/Cafe.svg'}
                width={28}
                height={27}
                alt='small coffee icon'
                className={styles.product__token}
              />
              <span>Promo Products</span>
            </div>

            <ul className={styles.product__list}>
              <li>Drinkware</li>
              <li>Office & Stationary</li>
              <li>Eco Friendly</li>
              <li>Technology</li>
              <li>Health & Wellness</li>
            </ul>
          </div>
          <Image
            src={'/bottle.png'}
            width={290}
            height={380}
            alt='hydro flask image'
            className={styles.product__image}
          />
        </div>
      </div>
    </div>
  );
}
