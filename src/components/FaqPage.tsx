import React, { useState } from 'react';
import styles from '../styles/Faq.module.scss';

interface FAQ {
  n: number;
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    n: 1,
    q: 'What is your minimum order?',
    a: 'Hard good items vary by product. Orders for embroidery have a minimum of 12 pieces per design. Screen print has a minimum of 24 pieces per design.',
  },
  {
    n: 2,
    q: 'What is your turnaround time?',
    a: 'After order has been approved with all the necessary elements and  payment has been received it will go into production of 10-12 days + shipping depending on the complexity of your order. If you have a firm in-hands date please let us know ahead of time. Rush fees may apply.',
  },
  {
    n: 3,
    q: 'How Can I get a quote?',
    a: 'Fill out our contact form or send us an email to tell us a bit more about your project!',
  },
  {
    n: 4,
    q: 'How is your pricing determined?',
    a: 'Price is determined by several factors. Quantity of units, decoration method and location placements, and how many colors are in your design. No two orders are the same. Contact us for your custom quote.',
  },
  {
    n: 5,
    q: 'Can you design my logo?',
    a: 'We do not offer graphic design services at this time.',
  },
  {
    n: 6,
    q: 'Do you offer samples?',
    a: 'We may offer samples for certain products for returning customers only.',
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
    <section id='faq' className={styles.faq}>
      <h2 className={styles.faqTitle}>FAQ</h2>
      <div className={styles.faqPage}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={`${styles.faqHeader} ${
                open === index ? styles.faqHeaderOpen : ''
              }`}
              onClick={() => onClick(index)}
            >
              {' '}
              <div>
                <span className={styles.faqNumber}>0{faq.n}</span>
                <span className={styles.faqQuestion}>{faq.q}</span>
              </div>
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
