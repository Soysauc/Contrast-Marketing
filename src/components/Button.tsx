import Link from 'next/link';
import styles from '../styles/Button.module.scss';

interface ButtonProps {
  type: 'startQuote' | 'seeHow' | 'join' | 'submit';
}

export default function Button({ type }: ButtonProps) {
  const buttonClassName = styles[type];

  let href = '';

  if (type === 'startQuote') {
    href = '#contact';
  } else if (type === 'seeHow') {
    href = '#how-it-works';
  } // Add more conditions for other button types if needed

  return (
    <Link href={href}>
      <button className={`${styles.button} ${buttonClassName}`} type='button'>
        {type === 'startQuote' && 'START A QUOTE'}
        {type === 'seeHow' && 'SEE HOW WE DO IT'}
        {type === 'join' && 'JOIN'}
        {type === 'submit' && 'SUBMIT'}
      </button>
    </Link>
  );
}
