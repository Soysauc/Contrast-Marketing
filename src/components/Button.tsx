import Link from 'next/link';
import styles from '../styles/Button.module.scss';

interface ButtonProps {
  type: 'startQuote' | 'seeHow' | 'join' | 'submit';
}

export default function Button({ type }: ButtonProps) {
  const buttonClassName = styles[type];

  return (
    <Link className={`${styles.button} ${buttonClassName}`} href='#'>
      {type === 'startQuote' && 'START A QUOTE'}
      {type === 'seeHow' && 'SEE HOW WE DO IT'}
      {type === 'join' && 'JOIN'}
      {type === 'submit' && 'SUBMIT'}
    </Link>
  );
}
