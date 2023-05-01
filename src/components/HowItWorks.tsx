import styles from '../styles/HowItWorks.module.scss';
import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section className={styles['how-it-works']}>
      <h2 className={styles['how-it-works__title']}>How it works</h2>
      <div className={styles['how-it-works__wrapper']}>
        <div className={styles['how-it-works__item']}>
          <div className={styles.circle}>
            <span className={styles.number}>1</span>
          </div>
          <div className={styles['how-it-works__text-1']}>
            <h3>Let your original ideas take flight</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              corporis provident minima voluptatibus, dolorem dolorum deleniti
              suscipit vero quis nihil at, expedita praesentium sit fugit?
            </p>
          </div>
          <Image
            src={'/howItWorks1.jpg'}
            width={485}
            height={380}
            alt='woman reading'
            style={{ borderRadius: '10px' }}
          />{' '}
        </div>
        <div className={styles['how-it-works__item']}>
          <Image
            src={'/howItWorks2.jpg'}
            width={485}
            height={380}
            alt='shopping cart'
          />
          <div className={styles.circle}>
            <span className={styles.number}>2</span>
          </div>
          <div>
            <h3>We will send you a custom quote for your order.</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              corporis provident minima voluptatibus, dolorem dolorum deleniti
              suscipit vero quis nihil at, expedita praesentium sit fugit?
            </p>
          </div>
        </div>
        <div className={styles['how-it-works__item']}>
          <div className={styles.circle}>
            <span className={styles.number}>3</span>
          </div>
          <div className={styles['how-it-works__text-1']}>
            <h3>Unbox the Awesome!</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              corporis provident minima voluptatibus, dolorem dolorum deleniti
              suscipit vero quis nihil at, expedita praesentium sit fugit?
            </p>
          </div>
          <Image
            src={'/howItWorks3.jpg'}
            width={485}
            height={380}
            alt='unboxing'
          />
        </div>
      </div>
    </section>
  );
}
