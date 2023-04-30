import Link from 'next/link';
import styles from '../styles/Button.module.scss';

// Define the ButtonProps interface to specify the expected props
interface ButtonProps {
  type: 'startQuote' | 'seeHow' | 'join';
}

// Update the Button component to accept ButtonProps
export default function Button({ type }: ButtonProps) {
  // Get the corresponding class name based on the type prop
  const buttonClassName = styles[type];

  return (
    <Link className={`${styles.button} ${buttonClassName}`} href='/contact'>
      {type === 'startQuote' && 'START A QUOTE'}
      {type === 'seeHow' && 'SEE HOW WE DO IT'}
      {type === 'join' && 'JOIN'}
    </Link>
  );
}
