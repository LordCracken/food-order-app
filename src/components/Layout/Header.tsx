import HeaderCartButton from './HeaderCartButton';

import { IHeader } from '../../interfaces';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = ({ onShowCart }: IHeader) => (
  <>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="A table full of delicious food!" />
    </div>
  </>
);

export default Header;
