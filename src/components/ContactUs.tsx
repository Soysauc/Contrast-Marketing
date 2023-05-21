import Button from './Button';
import styles from '../styles/ContactUs.module.scss';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className={styles.ContactUs}>
      <h2 className={styles.ContactUs__title}>Contact Us</h2>
      <p className={styles.ContactUs__subtitle}>
        Quis accumsan quam dignissim fames sed volutpat purus. Adipiscing eget
        integer nisi.
      </p>
      <form className={styles.contactForm}>
        <div className={styles.inputGroup}>
          <Image
            src='name.svg'
            alt='person icon'
            width={15}
            height={17}
            className={styles.inputGroup_img}
          />
          <input
            type='text'
            placeholder='Your name'
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputGroup}>
          <Image
            src='envelope.svg'
            alt='envelope icon'
            width={19}
            height={14}
            className={styles.inputGroup_img}
          />
          <input
            type='email'
            placeholder='Your email'
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputGroup}>
          <textarea placeholder='Your message' className={styles.inputField} />
        </div>
        <Button type='contact' />
      </form>
    </div>
  );
};

export default ContactUs;