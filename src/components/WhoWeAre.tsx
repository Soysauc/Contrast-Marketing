import Button from './Button';
import styles from '../styles/WhoWeAre.module.scss';

export default function WhoWeAre() {
  return (
    <div id='who-we-are' className={styles.whoweare}>
      <div className={styles.whoweare__content}>
        <h1 className={styles.whoweare__title}>Who We Are</h1>
        <div className={styles.whoweare__aside}>
          <p className={styles.whoweare__subtitle}>
            With years of experience in the promotional products industry, our
            team of experts is dedicated to simplifying the process for
            businesses of all sizes. <br />
            We believe in creating custom solutions that save you time and
            deliver high-quality products designed to resonate with your target
            audience.
          </p>
          <Button type='seeHow' />
        </div>
      </div>
    </div>
  );
}
