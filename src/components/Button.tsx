import Link from 'next/link';
import styles from '../styles/Button.module.scss';

interface ButtonProps {
  type: 'startQuote' | 'seeHow' | 'join' | 'contact';
}

export default function Button({ type }: ButtonProps) {
  const buttonClassName = styles[type];

  return (
    <Link className={`${styles.button} ${buttonClassName}`} href='/contact'>
      {type === 'startQuote' && 'START A QUOTE'}
      {type === 'seeHow' && 'SEE HOW WE DO IT'}
      {type === 'join' && 'JOIN'}
      {type === 'contact' && 'CONTACT US NOW'}
    </Link>
  );
}
