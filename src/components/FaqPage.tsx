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
    q: 'Adipiscing ipsum ipsum vitae',
    a: 'Bibendum quis ridiculus at nunc. Mattis ut aliquet tortor mattis donec interdum. Congue sed magna quis id. Et egestas placerat pharetra gravida. Leo porta fermentum nulla aliquam ut fermentum tincidunt dignissim tellus. At in sapien libero aliquam. Risus commodo id integer ultricies. Vitae aliquet leo aliquam egestas et senectus.',
  },
  { n: 2, q: 'Rhoncus malesuada tortor', a: 'Answer 2' },
  {
    n: 3,
    q: 'Platea fames eu et arcu vitae',
    a: 'Answer 3',
  },
  {
    n: 4,
    q: 'Pharetra ultricies nulla',
    a: 'Answer 4',
  },
  {
    n: 5,
    q: 'Vestibulum turpis quis',
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
