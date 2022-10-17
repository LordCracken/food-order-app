import { useReducer, FC, ReactNode } from 'react';
import CartContext, { ICartItem, ICartState } from './cart-context';

interface ICartProvider {
  children: ReactNode;
}

enum CartActions {
  add = 'ADD',
  remove = 'REMOVE',
}

interface ICartAction<T> {
  type: CartActions;
  payload?: T;
}

const initialState: ICartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: ICartState, action: ICartAction<string | ICartItem>): ICartState => {
  if (action.type === CartActions.add && typeof action.payload !== 'string') {
    const updatedItems = state.items.concat(action.payload!);
    const updatedTotalAmount = state.totalAmount + action.payload!.price * action.payload!.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return initialState;
};

const CartProvider: FC<ICartProvider> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addItemToCartHandler = (item: ICartItem) => {
    dispatchCartAction({ type: CartActions.add, payload: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: CartActions.remove, payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
