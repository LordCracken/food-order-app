import { ReactNode } from 'react';

export interface ICard {
  children: ReactNode;
}

export interface IMealItem {
  name: string;
  description: string;
  price: number;
}
