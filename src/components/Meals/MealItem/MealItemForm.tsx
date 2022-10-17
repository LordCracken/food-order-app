import { useState, useRef, FormEvent } from 'react';

import Input from '../../UI/Input';

import { IMealItemForm } from '../../../interfaces';
import classes from './MealItemForm.module.css';

const MealItemForm = ({ id, onAddToCart }: IMealItemForm) => {
  const [amountIsValid, setAmountIsValid] = useState<boolean>(true);

  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current?.value ?? '';

    if (!enteredAmount.trim().length || +enteredAmount < 1 || +enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(+enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{ id: 'amount_' + id, type: 'number', min: 1, max: 5, step: 1, defaultValue: 1 }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
