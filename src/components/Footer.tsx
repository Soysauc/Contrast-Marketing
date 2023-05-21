import Button from './Button';
import Image from 'next/image';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content_left}>
          <Image
            src='/FooterLogo.svg'
            alt='Logo'
            height={79}
            width={117}
            className={styles.footer__logo}
          />
          <div className={styles.footer__content}>
            <div className={styles.footer__icon_line}>
              <Image src='/Mail.svg' alt='mail icon' height={13} width={18} />
              <p>info@contrastmarketing.com</p>
            </div>
            <div className={styles.footer__icon_line}>
              <Image src='/Phone.svg' alt='phone icon' height={16} width={16} />
              <p>+3 333 333 3333</p>
            </div>
            <div className={styles.footer__icon_line}>
              <Image src='/Map.svg' alt='map icon' height={20} width={14} />
              <p>
                Tristique gravida dolor a ante. Pellentesque pretium tristique
                augue bibendum bibendum vel.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footer__content}>
          <h4> Quick Links </h4>
          <nav>
            <ul className={styles.footer__nav}>
              <li>
                <a href='#'>item</a>
              </li>
              <li>
                <a href='#'>item</a>
              </li>
              <li>
                <a href='#'>item</a>
              </li>
              <li>
                <a href='#'>item</a>
              </li>
              <li>
                <a href='#'>item</a>
              </li>
              <li>
                <a href='#'>item</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.footer__content}>
          <h4> Subscribe </h4>
          <p>For news and updates, subscribe to our newsletter today</p>
          <div
            style={{
              display: 'flex',
              maxWidth: '395px',
            }}
          >
            <input
              className={styles.footer__input}
              type='text'
              id='email'
              name='email'
              placeholder='Enter Your Email here'
            ></input>
            <Button type='join' />
          </div>
        </div>
      </div>
      <span className={styles.footer__divider}></span>
      <div className={styles.footer__socials}>
        <div className={styles.footer__social_icon}>
          {' '}
          <a href='https://www.instagram.com'>
            <Image src='/insta.svg' alt='ig icon' height={42} width={42} />
          </a>
        </div>
        <div className={styles.footer__social_icon}>
          <a href='https://www.facebook.com'>
            <Image src='/facebook.svg' alt='fb icon' height={42} width={42} />
          </a>
        </div>
        <div className={styles.footer__social_icon}>
          <a href='https://www.linkedin.com'>
            <Image src='/linked.svg' alt='li icon' height={42} width={42} />
          </a>
        </div>
      </div>
      <p className={styles.footer__copy}>
        © 2023 - Contrast Marketing. All rights reserved.
      </p>
    </footer>
  );
}
