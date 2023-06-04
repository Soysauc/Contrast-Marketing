import Button from './Button';
import styles from '../styles/ContactUs.module.scss';
import Image from 'next/image';

const ContactUs: React.FC = () => {
  return (
    <div id='contact' className={styles.ContactUs}>
      <h2 className={styles.ContactUs__title}>
        Ready to Simplify Your Promotional Product Experience?
      </h2>
      <p className={styles.ContactUs__subtitle}>
        Get started today and let us curate the perfect bundle for your
        business.
      </p>
      <form className={styles.contactForm}>
        <div className={styles.inputGroup}>
          <Image
            src='/name.svg'
            alt='person icon'
            width={15}
            height={17}
            className={styles.inputGroup_img}
          />
          <input
            type='text'
            name='name'
            placeholder='Your name'
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <Image
            src='/envelope.svg'
            alt='envelope icon'
            width={19}
            height={14}
            className={styles.inputGroup_img}
          />
          <input
            type='email'
            name='email'
            placeholder='Your email'
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <textarea
            name='message'
            placeholder='Your message'
            className={styles.inputField}
            required
          />
        </div>
        <Button type='submit' />
      </form>
    </div>
  );
};

export default ContactUs;
