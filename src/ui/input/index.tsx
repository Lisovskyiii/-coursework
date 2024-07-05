import styles from './style.module.scss';

interface InputProps {
  name: string;
  type: string;
  autoComplete?: string;
  [key: string]: any;
}

export const Input = ({ name, type, value, autoComplete, ...props }: InputProps): JSX.Element => (
  <input
    {...props}
    autoComplete={autoComplete}
    value={value}
    className={styles.input}
    name={name}
    type={type}
  />
);
