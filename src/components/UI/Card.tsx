import { ICard } from '../../interfaces';
import classes from './Card.module.css';

const Card = ({ children }: ICard) => <div className={classes.card}>{children}</div>;

export default Card;
