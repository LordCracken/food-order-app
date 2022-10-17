import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import { IHeaderCartButton } from '../../interfaces';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = ({ onClick }: IHeaderCartButton) => {
  const cartCtx = useContext(CartContext);

  const itemsCount = cartCtx.items.reduce((curNum, item) => curNum + item.amount, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
