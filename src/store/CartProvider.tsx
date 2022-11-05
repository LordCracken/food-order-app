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
  if (typeof action.payload !== 'string' && action.type === CartActions.add) {
    const updatedTotalAmount = state.totalAmount + action.payload!.price * action.payload!.amount;

    const existingItemIndex = state.items.findIndex(
      item => typeof action.payload !== 'string' && item.id === action.payload!.id,
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.payload!.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload!);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === CartActions.remove) {
    const existingItemIndex = state.items.findIndex(item => item.id === action.payload);
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.payload);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

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
