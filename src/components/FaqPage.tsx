import React, { useState } from 'react';
import styles from '../styles/Faq.module.scss';

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: 'Question 1',
    a: 'Answer 1',
  },
  {
    q: 'Question 2',
    a: 'Answer 2',
  },
  {
    q: 'Question 3',
    a: 'Answer 3',
  },
  {
    q: 'Question 4',
    a: 'Answer 4',
  },
  {
    q: 'Question 5',
    a: 'Answer 5',
  },
];

const FAQPage: React.FC = () => {
  const [open, setOpen] = useState<number>(-1);

  const onClick = (index: number) => {
    if (index === open) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  return (
    <section className={styles.faq}>
      <h2>FAQ</h2>
      <div className={styles.faqPage}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={`${styles.faqHeader} ${
                open === index ? styles.faqHeaderOpen : ''
              }`}
              onClick={() => onClick(index)}
            >
              <span className={styles.faqQuestion}>{faq.q}</span>
              <span className={styles.faqToggle}>
                {open === index ? '-' : '+'}
              </span>
            </div>
            {open === index && <div className={styles.faqAnswer}>{faq.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
