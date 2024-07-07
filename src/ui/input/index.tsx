import cn from 'classnames';

import styles from './style.module.scss';

interface InputProps {
  name?: string;
  type: string;
  className?: string;
  autoComplete?: string;
  [key: string]: any;
}

export const Input = ({
  name,
  className,
  type,
  value,
  autoComplete,
  ...props
}: InputProps): JSX.Element => (
  <input
    {...props}
    autoComplete={autoComplete}
    value={value}
    className={cn(styles.input, className)}
    name={name}
    type={type}
  />
);
