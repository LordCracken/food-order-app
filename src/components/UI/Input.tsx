import { forwardRef } from 'react';

import { IInput } from '../../interfaces';
import classes from './Input.module.css';

const Input = forwardRef<HTMLInputElement, IInput>(({ label, input }, ref) => (
  <div className={classes.input}>
    <label htmlFor={input.id}>{label}</label>
    <input ref={ref} {...input} />
  </div>
));

Input.displayName = 'Input';

export default Input;
