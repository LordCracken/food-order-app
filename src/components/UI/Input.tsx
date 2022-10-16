import { IInput } from '../../interfaces';
import classes from './Input.module.css';

const Input = ({ label, input }: IInput) => (
  <div className={classes.input}>
    <label htmlFor={input.id}>{label}</label>
    <input {...input} />
  </div>
);

export default Input;
