import { createContext } from 'react';

export interface ICartState {
  items: ICartItem[];
  totalAmount: number;
}

export interface ICartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

interface ICartContext extends ICartState {
  addItem: (item: ICartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<ICartContext>({
  items: [],
  totalAmount: 0,
  addItem: () => null,
  removeItem: () => null,
  clearCart: () => null,
});

export default CartContext;
