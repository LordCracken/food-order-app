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

export interface IModal {
  children: ReactNode;
  onClose: () => void;
}

export interface IModalOverlay {
  children: ReactNode;
}

export interface IBackdrop {
  onClose: () => void;
}

export interface IHeader {
  onShowCart: () => void;
}

export interface IHeaderCartButton {
  onClick?: () => void;
}

export interface ICart {
  onClose: () => void;
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
