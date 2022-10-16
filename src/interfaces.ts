import { ReactNode } from 'react';

interface IInputProps {
  id: string;
  type: 'text' | 'number' | 'url' | 'tel';
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

export interface ICard {
  children: ReactNode;
}

export interface IInput {
  label: string;
  input: IInputProps;
}

export interface IMealItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface IMealItemForm {
  id: string;
}
