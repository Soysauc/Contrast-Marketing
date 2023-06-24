import styles from '../styles/HowItWorks.module.scss';
import Image from 'next/image';
import Button from './Button';

export default function HowItWorks() {
  return (
    <section id='how-it-works' className={styles['how-it-works']}>
      <h2 className={styles['how-it-works__title']}>How it works</h2>
      <div className={styles['how-it-works__wrapper']}>
        <div className={styles['how-it-works__item']}>
          <div className={styles.circle}>
            <span className={styles.number}>1</span>
          </div>
          <div className={styles['how-it-works__text-1']}>
            <h3>
              Tell Us Your Needs: Share your industry, target audience, and
              goals
            </h3>
          </div>
          <div className={styles['vector-1-container']}>
            <Image src={'/Vector1.svg'} width={580} height={480} alt='Line 1' />
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
          <div className={styles['vector-2-container']}>
            <Image src={'/Vector2.svg'} width={580} height={480} alt='Line 1' />
          </div>
          <div>
            <h3 style={{ maxWidth: '472px' }}>
              Curated Selection: Our experts handpick products tailored to your
              specifications
            </h3>
          </div>
        </div>
        <div className={styles['how-it-works__item']}>
          <div className={styles.circle}>
            <span className={styles.number}>3</span>
          </div>
          <div className={styles['how-it-works__text-1']}>
            <h3>
              Tell Us Your Needs: Share your industry, target audience, and
              goals
            </h3>
          </div>
          <Image
            src={'/howItWorks3.jpg'}
            width={485}
            height={380}
            alt='woman reading'
            style={{ borderRadius: '10px' }}
          />{' '}
        </div>
        <Button type='startQuote' />
      </div>
    </section>
  );
}
