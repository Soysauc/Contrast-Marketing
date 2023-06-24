import React from 'react';
import styles from '../styles/BoxContainer.module.scss';

const BoxContainer: React.FC = () => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.box}>
        <div>
          <b>Save Time</b>
          <br></br> <span>No more searching through thousands of products</span>
        </div>
      </div>
      <div className={styles.box}>
        {' '}
        <div>
          <b>Tailored Solutions</b>
          <br></br> <span>Bundles curated specifically for your industry</span>
        </div>
      </div>
      <div className={styles.box}>
        {' '}
        <div>
          <b>Quality Guarantee</b>
          <br></br>{' '}
          <span>We handpick high-quality items to maximize impact</span>
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;
