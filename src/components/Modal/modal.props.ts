import { ReactNode } from 'react';

export interface ModalProps {
  children: any;
  show: boolean;
  closeModal: () => void;
}